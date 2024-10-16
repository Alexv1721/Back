const Product = require('./product.model');  // Import the correct model

const getAllProductsFromDB = async () => {
    try {
        const products = await Product.find();  // Fetch all products from DB
        return products;
    } catch (error) {
        throw new Error('Error fetching products from the database');
    }
};

module.exports = getAllProductsFromDB;
