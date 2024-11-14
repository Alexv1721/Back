const router = require('express').Router();
const {  getAllProducts,addProduct, delProduct, updateProduct ,getProduct} = require('./product.controller');  
const verifyToken = require('../middleware/verifyuser');
const adminVerifier = require('../middleware/adminverify');
router.get('/allproducts',verifyToken, getAllProducts);
router.get('/product/:id',verifyToken, getProduct);
router.post('/addproduct',adminVerifier,addProduct);
router.delete('/delproduct/:id', adminVerifier, delProduct);
router.put('/updateproduct/:id',adminVerifier,updateProduct);
module.exports=router
