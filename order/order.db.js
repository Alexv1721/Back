const Order = require('./order.model');
const Cart=require('../cart/cart.model');
const { AppError } = require('../utils/custom.err');
const { default: mongoose } = require('mongoose');
const getOrdersFromDB = async (uid) =>{
    try {
        const orders = await Order.find({user:uid});
        return orders;
    } catch (err) {
        throw new AppError('Error fetching orders from the database');
    }
}
const addordertodb=async(id,uid,count)=>{
  try{
    const item=await Cart.findOne({_id:id,user:uid}) 
console.log(item);

    const k = {
      cat: item.cat, description: item.description, image: item.image
      , price: item.price*parseInt(count), rating: {
        rate: item.rating.rate,
        count: item.rating.count
      }
      , title: item.title,
      user:uid,
      count:count
    }
    const order=await Order.create(k)
    await Cart.deleteOne({_id:id,user:uid})
    return order
  }
  catch(err){
    console.log(err);
    
    throw new AppError('Error in add order')
  }
    
}

const addorderstoDB=async(uid)=>{
try{
  const data=await Cart.find({user:uid})
    for (let item of data) {
   
        const k = {
          cat: item.cat, description: item.description, image: item.image
          , price: parseInt(item.price), rating: {
            rate: parseInt(item.rating.rate),
            count:parseInt( item.rating.count)
          }
          , title: item.title,
          user:uid
        }
          const order=await Order.create(k)
      
      
    }
}

catch(err){
    console.log(err.message);
    throw new Error('Error in db')
}


}
module.exports = {getOrdersFromDB,addordertodb,addorderstoDB};
