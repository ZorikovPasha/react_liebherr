const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({
  machineryId: {type: mongoose.Schema.Types.ObjectId, ref: 'machinery'},
  client: {
    name: String,
    phone: String,
    mail: String
  },
  date: Date,
  status: String
})

module.exports = mongoose.model('Request', RequestSchema);