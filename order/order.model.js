const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    cat: String,
    description: String,
    image: String,
    price: Number,
    rating: { rate: Number, count: Number },
    title: String,
    count:{type:Number,default:1},
    user:{type:mongoose.Schema.ObjectId,ref:'User'}
});
module.exports = mongoose.model('Order', orderSchema); 
