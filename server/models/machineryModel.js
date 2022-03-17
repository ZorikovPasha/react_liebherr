const mongoose = require('mongoose');

const machinerySchema = mongoose.Schema({
  id: Number,
  imgSrc: String,
  name: String,
  thumbs: [String],
  features: {
    liftingCapacity: {
      text: String,
      value: Number,
    },
    arrowLength: {
      text: String,
      value: Number,
    },
    mainArrowLength: {
      text: String,
      value: Number,
    },
    maxHeight: {
      text: String,
      value: Number,
    },
    maxRadius: {
      text: String,
      value: Number,
    },
    speed: {
      text: String,
      value: Number,
    },
    extension: {
      text: String,
      value: Number,
    },
    price: {
      text: String,
      value: Number,
    },
  },
  similarOnes: [Number]
});

module.exports = mongoose.model('machinery', machinerySchema);