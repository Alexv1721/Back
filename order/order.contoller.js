const OrderService = require('./order.service');
const asyncErrorhandler = require('../utils/asyncErrorhandler');
const getOrders =asyncErrorhandler(
    async (req, res) => {
        const orders=await OrderService.getorders(req.user._id)
            return res.status(200).json({ data:orders });
        }
)
const addOrder=asyncErrorhandler(
    async(req,res)=>{
        const count=req.body.count
        const neworder=await OrderService.addorder(req.params.id,req.user._id,count)
  
      return res.status(200).json({data:neworder})
    
    }
)
const addOrders=async(req,res)=>{
      
    await OrderService.addorders(req.user._id)
    return res.status(200).send('Added Sucessfully')

}

module.exports = {
    getOrders,addOrder,addOrders
};
