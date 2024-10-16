const ProductService = require('./product.service');

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(404).json({ msg: 'Error in fetching products' });
    }
};

module.exports = {
    getAllProducts
};
