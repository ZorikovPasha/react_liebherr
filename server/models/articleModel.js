const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  id: Number,
  title: String,
  subtitle: String,
  preview: String,
  subtitles: [String],
  sections: [[ { text: String, isListItem: Boolean } ]],
  images: [String],
});

module.exports = mongoose.model('article', articleSchema);