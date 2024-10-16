const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cat: String,
    description: String,
    image: String,
    price: Number,
    rating: { rate: Number, count: Number },
    title: String,
});

module.exports = mongoose.model('Order', orderSchema);  // Ensure model name is singular and consistent
