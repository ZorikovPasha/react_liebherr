const Machinery = require('../models/machineryModel');
const Construction = require('../models/constructionModel');
const Article = require('../models/articleModel');
const ApiError = require('../error/index');

function isNumeric(str) {
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

class dataController {
  async getMachinery(req, res, next) {
    try {
      const itemsPerChunk = 10

      if (!req.query.chunk) {
        const machinery  = await Machinery.find({});
        return res.send({ items: machinery, total: machinery.length });
      } else if (req.query.chunk && Object.keys(req.query).length === 1) {
        const machinery  = await Machinery.find({});
  
        const low = (Number(req.query.chunk) - 1) * itemsPerChunk
        const high = Number(req.query.chunk) * itemsPerChunk
        const currPortion = machinery.filter(a => a.id > low && a.id <= high )
  
        return res.send({ items: currPortion, total: machinery.length, chunk: Number(req.query.chunk) });
      } else {
        let machinery;

        const filterCriteria = Object.keys(req.query)?.reduce((accum, feat) => {
          if (!feat.includes("_")) {
            if (feat === "chunk" || feat === "sort") {
              return accum
            }
            else if (isNumeric(Number(req.query[feat]))) {
              return {
                ...accum,
                [`features.${feat}.value`]: Number(req.query[feat])
              }
            } else {
              return {
                ...accum,
                [`features.${feat}.value`]: req.query[feat]
              } 
            }
          } else {
            const characteristic = feat.split("_")[0]
            if (!accum[`features.${characteristic}.value`]) {
              accum[`features.${characteristic}.value`] = {}
            }
            feat.split("_")[1] === "from"
              ? accum[`features.${characteristic}.value`].$gte = Number(req.query[feat])
              : accum[`features.${characteristic}.value`].$lte = Number(req.query[feat]) // значит to
            return accum
          }
        }, {})

        if (req.query.sort) {
          machinery = await Machinery.find(filterCriteria).sort({ [req.query.sort]: 1 });
        } else {
          machinery = await Machinery.find(filterCriteria)
        }

        if (!machinery?.length) {
          return res.send({ items: [], total: 0, chunk: Number(req.query.chunk) });
        }

        const low = (Number(req.query.chunk) - 1) * itemsPerChunk
        const high = Number(req.query.chunk) * itemsPerChunk
        const currPortion = machinery.filter((_, idx) => idx >= low && idx < high )
        return res.send({ items: currPortion, total: machinery.length, chunk: Number(req.query.chunk) });
      }
    } catch (err) {
      next(ApiError.internal(err));
    }
  }
  async getSingleMachinery(req, res) {
    try {
      const machinery  = await Machinery.findOne({ id: req.body.id });

      const similarOnes = [];
      const getSimilarOnes = async () => {
        for(const id of machinery.similarOnes) {
          const item = await Machinery.findOne({ id })
          similarOnes.push(item);
        }
        res.send({machinery, similarOnes});
      };

      getSimilarOnes();
    } catch (err) {
      next(ApiError.internal(err));
    }
  }

  async getSingleConstruction(req, res) {
    try {
      const construction  = await Construction.findOne({ id: req.body.id });

      const similarOnes = [];
      const getSimilarOnes = async () => {
        for(const id of construction.anotherConstructions) {
          const item = await Construction.findOne({ id })
          similarOnes.push(item);
        }
        res.send({construction, similarOnes});
      };

      getSimilarOnes();
    } catch (err) {
      next(ApiError.internal(err));
    }
  }

  async getConstructions(req, res) {
    try {
      const constructions  = await Construction.find({});
      res.send({ constructions, hasMore: constructions > 9 });
    } catch (err) {
      next(ApiError.internal(err));
    }
  }

  async getConstructionsIds(req, res) {
    try {
      const constracts  = await Construction.find();
      if (!constracts) {
        return res.status(200).json({ message: "No constracts found" })
      }

      const IDS = constracts.reduce((accum, next) => [...accum, next.id], [])
      res.send({ items: IDS })
    } catch (error) {
      next(ApiError.internal(err));
    }
  }

  async getArticlesIds(req, res) {
    try {
      const articles  = await Article.find();
      if (!articles) {
        return res.status(200).json({ message: "No articles found" })
      }

      const IDS = articles.reduce((accum, next) => [...accum, next.id], [])
      res.send({ items: IDS })
    } catch (error) {
      next(ApiError.internal(err));
    }
  }

  async getArticles(req, res) {
    try {
      const itemsInChunk = 6

      const articles  = await Article.find();
      if (!req.query.chunk) {
        return res.send({ items: articles });
      }
      const currPortion = articles.filter(a => a.id <= Number(req.query.chunk) * itemsInChunk )
      const hasMore = articles.length > itemsInChunk * Number(req.query.chunk)

      res.send({ items: currPortion, hasMore });
    } catch (err) {
      next(ApiError.internal(err));
    }
  }

  async getSingleArticle(req, res) {
    try {
      const article  = await Article.findOne({ id: req.body.id });
      res.send(article);
    } catch (err) {
      next(ApiError.internal(err));
    }
  }
}

module.exports = new dataController();
