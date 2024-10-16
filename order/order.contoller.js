const OrderService = require('./order.service');

const getOrders = async (req, res) => {
    try {
        const orders = await OrderService.getorders();  
        return res.status(200).json(orders);
    } catch (err) {
        console.error('Error:', err.message);
        return res.status(500).json({ error: 'Error fetching orders' });
    }
};

const addOrder=async(req,res)=>{
try{
    const neworder=await OrderService.addorder(req.params.id)
  return res.status(200).json({data:neworder})
}
catch(err){
    console.log('error in add',err);
    return res.status(400).json({err:err.message})
    
}
}
const addOrders=async(req,res)=>{
try{
    const data=req.body
  
    
    await OrderService.addorders(data)
    return res.status(200).send('Added Sucessfully')
}
catch(err){
console.log(err);
res.status(400).send('Failed to Add')

}
}
module.exports = {
    getOrders,addOrder,addOrders
};
