const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hoverboardSchema = new Schema({
  model: {type: String, require: true},
  name: {type: String, require: true, unique: true},
  //img: {type: String},
  state:{type: String, enum: ['waiting','flying']},
  location:{
      type: {String},
       coordinates:[Number]   
    },
    stocks:[{type:Schema.Types.ObjectId, ref: 'Stock'}]

});


const Hoverboard = mongoose.model('Hoverboard', hoverboardSchema);

module.exports = Hoverboard;