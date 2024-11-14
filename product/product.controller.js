const asyncErrorhandler = require('../utils/asyncErrorhandler');
const ProductService = require('./product.service');
const getAllProducts = asyncErrorhandler(
        async (req,res) => {
                const products = await ProductService.getAllProducts();
                return res.status(200).json({data:products});
            } 
)
const addProduct= asyncErrorhandler(
        async(req,res)=>{
                const product=await ProductService.addProduct(req.body)
                return res.status(200).json({msg:'sucessfully added',statusCode:200,data:product})
            }
)
    const delProduct=asyncErrorhandler(async(req,res)=>{
        const product=await ProductService.deleteProduct(req.params.id)
        return res.status(200).json({data:product})
   
})
    const updateProduct=asyncErrorhandler(async(req,res)=>{
        const product=await ProductService.updateProduct(req.params.id)
        return res.status(200).json({data:product})
    
   
})
    const getProduct=asyncErrorhandler(async(req,res)=>{
        console.log(req.params.id);
        const product =await ProductService.getProduct(req.params.id)
        return res.status(200).json({data:product})
        })
module.exports = {
    getAllProducts,addProduct,delProduct,updateProduct,getProduct
};
