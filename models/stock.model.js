const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//CREATE THE SCHEMA
const stockSchema = new Schema({
  model: {type: String, require: true, unique: true},
  name: {type: String, require: true, unique: true},
  hoverboard:{type: Schema.Types.ObjectId, ref: 'Hoverboard'}

});

//CREATE MODEL
const Stock = mongoose.model('Stock', stockSchema);

//EXPORT
module.exports = Stock;