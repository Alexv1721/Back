const Order = require('./order.model');
const Cart=require('../cart/cart.model')
const getOrdersFromDB = async () => {
    try {
        const orders = await Order.find();  // Fetch all orders from the database
        return orders;
    } catch (err) {
        throw new Error('Error fetching orders from the database');
    }
};
const addordertodb=async(id)=>{
  try{
    const item=await Cart.findById(id)
    const dcart=await Cart.findByIdAndDelete(id)
    const k = {
        cat: item.cat, description: item.description, image: item.image
        , price: item.price, rating: {
          rate: item.rating.rate,
          count: item.rating.count
        }
        , title: item.title
      }
    const order=await Order.create(k)
    return order
  }
  catch(err){
    throw new Error(err)
  }
    
}

const addorderstoDB=async()=>{
try{
  const data=await Cart.find()
    for (const item of data) {
        const dcar=await Cart.findByIdAndDelete(item._id)
        const k = {
            cat:item.cat, description: item.description, image: item.image
            , price: item.price, rating: {
              rate: item.rating.rate,
              count: item.rating.count
            }
            , title: item.title
          }
        const order=await Order.create(k)
    }
}
catch(err){
    console.log(err);
    
    throw new Error('Error in db')
}


}
module.exports = {getOrdersFromDB,addordertodb,addorderstoDB};
