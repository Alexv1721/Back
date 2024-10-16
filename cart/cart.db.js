const Cart = require('./cart.model');
const Products=require('../product/product.model')
const getCartFromDB = async () => {
    try {
        const carts = await Cart.find();
        return carts;
    } catch (err) {
        throw new Error('Error in fetching carts from DB');
    }

};
const addcartbyid=async(id)=>{
    try{
        const item=await Products.findById(id)
        const k = {
                  cat: item.cat, description: item.description, image: item.image
                  , price: item.price, rating: {
                    rate: item.rating.rate,
                    count: item.rating.count
                  }
                  , title: item.title
                }
      const newcartittem= await Cart.create(k)
      return newcartittem
    }
    catch(err){
        throw new Error(err)
    }
}

const deletecartfromDB=async(id)=>{

    try{
const delcart=await Cart.findByIdAndDelete(id)
return delcart
    }
    catch(err){
throw new Error('error in db')
    }

}

module.exports = {getCartFromDB,addcartbyid,deletecartfromDB}
