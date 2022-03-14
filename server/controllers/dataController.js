const Machinery = require('../models/machineryModel');
const Construction = require('../models/constructionModel');
const Article = require('../models/articleModel');
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
      res.send({ machinery });
    } catch (err) {
      return ApiError.internal(res, err);
    }
  }

  async getSingleConstruction(req, res) {
    try {
      const construction  = await Construction.findOne({ id: req.body.id });
      res.send(construction);
    } catch (err) {
      return ApiError.internal(res, err);
    }
  }

  async getConstructions(req, res) {
    try {
      const constructions  = await Construction.find({});
      res.send(constructions);
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

}

module.exports = new dataController();