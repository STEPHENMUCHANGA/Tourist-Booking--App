
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
 email:String,
 password:String,
 role:{type:String, enum:['admin','tourist'], default:'tourist'}
});
module.exports = mongoose.model('User', schema);
