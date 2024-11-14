const Cart = require('./cart.model');
const Products=require('../product/product.model');
const AppError = require('../utils/custom.err');
const getCartFromDB = async (userId) => {
        const carts = await Cart.find({user:userId});
        return carts;
};

const addcartbyid=async(id,userId)=>{
        const item=await Products.findById(id)
console.log('db');
        if(!item){
          throw new AppError('No such Product',404)
        }
        const k = {
                  cat: item.cat, description: item.description, image: item.image
                  , price: item.price, rating: {
                    rate: item.rating.rate,
                    count: item.rating.count
                  }
                  , title: item.title,
                  user:userId
                }
      const newcartittem= await Cart.create(k)
      return newcartittem
    }
const deletecartfromDB=async(id,userId)=>{ 
const delcart=await Cart.deleteOne({_id:id,user:userId})
return delcart

}

module.exports = {getCartFromDB,addcartbyid,deletecartfromDB}
