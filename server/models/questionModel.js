const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  phone: String,
  question: String,
  date: Date,
})

module.exports = mongoose.model('question', QuestionSchema);