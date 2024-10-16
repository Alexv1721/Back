const router = require('express').Router();
const { GetCart,AddCart ,DeleteCart} = require('./cart.contoller'); 

router.get('/carts', GetCart); 
router.post('/addcart/:id',AddCart)
router.delete('/delcart/:id',DeleteCart)
module.exports = router;
