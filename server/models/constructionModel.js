const mongoose = require('mongoose');


const constructionSchema = mongoose.Schema({
  id: Number,
  title: String,
  text: String,
  images: [String],
  preview: String,
  anotherConstructions: [Number],
});

module.exports = mongoose.model('construction', constructionSchema);