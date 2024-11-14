const router = require('express').Router();
const { getCart, AddCart, DeleteCart } = require('./cart.controller');
const  verifyToken  = require('../middleware/verifyuser')
console.log(getCart);
router.get('/carts', verifyToken ,getCart);
router.post('/addcart/:id', verifyToken,AddCart)
router.delete('/delcart/:id', verifyToken,DeleteCart)
module.exports = router;