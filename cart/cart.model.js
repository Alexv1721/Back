const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    cat: String,
    description: String,
    image: String,
    price: Number,
    rating: { rate: Number, count: Number },
    title: String,
    user:{type:mongoose.Schema.ObjectId,ref:'User'}
  
});

module.exports = mongoose.model('Cart', cartSchema);  
