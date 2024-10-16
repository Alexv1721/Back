const router = require('express').Router();
const { getOrders,addOrder,addOrders } = require('./order.contoller');  
router.get('/orders', getOrders);  
router.post('/addorder/:id',addOrder)
router.post('/addorders',addOrders)
module.exports = router;
