const Machinery = require('../models/machineryModel');
const Construction = require('../models/constructionModel');
const Article = require('../models/articleModel');
const Question = require('../models/questionModel');
const ApiError = require('../error/index');

class dataController {
  async getMachinery(req, res) {
    try {
      const machinery  = await Machinery.find({});
      res.send([...machinery]);
    } catch (err) {
      return ApiError.internal(res, err);
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
      return ApiError.internal(res, err);
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
      return ApiError.internal(res, err);
    }
  }

  async getConstructions(req, res) {
    try {
      const constructions  = await Construction.find({});
      res.send({ constructions, hasMore: constructions > 9 });
    } catch (err) {
      return ApiError.internal(res, err);
    }
  }

  async getArticles(req, res) {
    try {
      const articles  = await Article.find();
      res.send(articles);
    } catch (err) {
      return ApiError.internal(res, err);
    }
  }

  async getSingleArticle(req, res) {
    try {
      const article  = await Article.findOne({ id: req.body.id });
      res.send(article);
    } catch (err) {
      return ApiError.internal(res, err);
    }
  }
  async makeRequest(req, res) {
    try {
      const { id, name, email, phone, question, date } = req.body;
      const askedQuestion = new Question({
        id,
        name,
        email,
        phone,
        question,
        date
      })
      askedQuestion.save((err) => {
        if (err) {
          ApiError.internal(res, err)
        }
        return res.status(200).json({ success: true });
      })
    } catch (err) {
      return ApiError.internal(res, err);
    }
  }

}

module.exports = new dataController();
