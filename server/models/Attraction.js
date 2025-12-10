
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
 name:String,
 location:String,
 description:String,
 coordinates:String
});
module.exports = mongoose.model('Attraction', schema);
