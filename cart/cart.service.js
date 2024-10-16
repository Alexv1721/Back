const {getCartFromDB,deletecartfromDB} = require('./cart.db');
const {addcartbyid}=require('./cart.db')
const CartService = {
    cart: async () => {
        try {
            const carts = await getCartFromDB();
            return carts;
        } catch (err) {
            throw new Error('Error in fetching cart in service');
        }
    }
    ,addcart:async(id)=>{
        try{
            const cart=await addcartbyid(id)
            return cart
        }
        catch(err){
            throw new Error(err.message)
        }
    }
    ,delcart:async(id)=>{
        try{
    const dcart=await deletecartfromDB(id)
        }
        catch(err){
throw new Error('error in del to db')
        }

    }
};

module.exports = CartService;
