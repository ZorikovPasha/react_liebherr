const ApiError = require("../error");
const Request = require("../models/requestModel")
const Question = require('../models/questionModel');

class UserRouter {
  async makeRequest(req, res, next) {
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
          return next(ApiError.internal(err));
        }
        return res.status(200).json({ success: true });
      })
    } catch (err) {
      next(ApiError.internal(err));
    }
  }

  async processOrder(req, res, next) {
    try {
      if(!req.body.id) {
        return next(ApiError.BadRequest("Id must be provided"))
      }
      const request = new Request({ 
        machineryId: req.body.id,
        client: {
          name: req.body.name,
          phone: req.body.phone,
          mail: req.body.mail
        },
        date: Date.now(), 
        status: "Обрабатывается"
      })
      await request.save()
      return res.status(200).json({ success: true });
    } catch (err) {
      next(ApiError.internal(err));
    }
  }
}

module.exports = new UserRouter