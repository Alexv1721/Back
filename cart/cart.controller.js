const CartService = require('./cart.service');
const asyncErrorhandler = require('../utils/asyncErrorhandler');
const getCart = asyncErrorhandler(async (req, res) => {
    const cartItems = await CartService.cart(req.user._id);
    return res.status(200).json(cartItems);
})
const AddCart = asyncErrorhandler(
    async (req, res) => {
        console.log('control');
        const id = req.params['id']
        console.log(id);
        const newcart = await CartService.addcart(id,req.user._id)
        return res.json({data:newcart})
    }
)
const DeleteCart = asyncErrorhandler(async (req, res) => {
    const k = await CartService.delcart(req.params.id,req.user._id)
    return res.status(200).json({ data: k })
})
module.exports = {
    getCart, AddCart, DeleteCart
};

