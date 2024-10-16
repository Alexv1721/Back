const CartService = require('./cart.service');

const GetCart = async (req, res) => {
    try {
        const cartItems = await CartService.cart();  // Await for async call
        return res.status(200).json(cartItems);
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ msg: 'Error in fetching cart' });
    }
};

const AddCart=async(req,res)=>{
    try{
        const id = req.params['id']
        const newcart=await CartService.addcart(id)
    res.json(newcart)
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ msg: 'Error in adding cart' });
        
    }
}

const DeleteCart=async(req,res)=>{

    try{
const k=await CartService.delcart(req.params.id)
return res.status(200).json({data:k})
    }
    catch(err){
        console.log(err);
       throw new Error('Error in control')
        
    }

}
module.exports = {
    GetCart,AddCart,DeleteCart
};

// app.post('/api/addcart/:id', async (req, res) => {
//   const id = req.params['id']
//   const item = await products.findOne({ _id: id })
//   const k = {
//     cat: item.cat, description: item.description, image: item.image
//     , price: item.price, rating: {
//       rate: item.rating.rate,
//       count: item.rating.count
//     }
//     , title: item.title
//   }
//   const c = await Carts.create(k)

// })