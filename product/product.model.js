const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    cat: String,
    description: String,
    image: String,
    price: Number,
    rating: {
        rate: Number,
        count: Number
    },
    title: String
});

module.exports = mongoose.model('Product', productSchema);  // Consistent model name 'Product'
