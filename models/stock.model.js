const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  model: {type: String, require: true, unique: true},
  name: {type: String, require: true, unique: true},

});


const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;