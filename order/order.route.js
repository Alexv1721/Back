const router = require('express').Router();
const verifyToken=require('../middleware/verifyuser')
const { getOrders,addOrder,addOrders } = require('./order.contoller');  
router.get('/orders',verifyToken,getOrders);  
router.post('/addorder/:id',verifyToken,addOrder)
router.post('/addorders',verifyToken,addOrders)
module.exports = router;
