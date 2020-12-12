const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, require: true, unique: true},
  email: {type: String, require: true},
  //email: { type: String, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, required: true, unique: true },
  password: {type: String, require: true},
});


const User = mongoose.model('User', userSchema);

module.exports = User;