const getAllProductsFromDB = require('./product.db');  

const ProductService = {
    getAllProducts: async () => {
        try {
            const products = await getAllProductsFromDB();  
            return products;
        } catch (error) {
            throw new Error('Error fetching products in service');
        }
    }
};

module.exports = ProductService;
