const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
   // authorName: String,
})
module.exports = bookSchema;
module.exports = mongoose.model( 
    'items', bookSchema, 'items'); 
