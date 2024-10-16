const router = require('express').Router();
const { getAllProducts } = require('./product.contoller');  

router.get('/allproducts', getAllProducts);  

module.exports = router;
