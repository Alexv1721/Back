const {getCartFromDB,deletecartfromDB} = require('./cart.db');
const {addcartbyid}=require('./cart.db')
const { NotfoundError, AppError } = require('../utils/custom.err');
const CartService = {
    cart: async (userId) => {
            const carts = await getCartFromDB(userId);
            return carts;
    }
    ,addcart:async(id,user)=>{
        try{
            const cart=await addcartbyid(id,user)
            return cart
        }
        catch(err){
            throw new AppError('Error in add item to cart')
        }
    }
    ,delcart:async(id,userId)=>{
        try{
    const dcart=await deletecartfromDB(id,userId)
        }
        catch(err){
throw new AppError('error in delete Cart')
        }

    }
};

module.exports = CartService;
