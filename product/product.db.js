const AppError = require('../utils/custom.err');
const Product = require('./product.model'); 

const getAllProductsFromDB = async () => {
    try {
        const products = await Product.find();  
        return products;
    } catch (error) {
        throw new Error('Error fetching products from the database');
    }
};

const delProducttomDB=async(id)=>{
try{
    const p=await Product.findById('66feb38f8ddfcb6f47edd14a')
    console.log(p);
    
  const product=await Product.findByIdAndDelete(id)  
  console.log('db',product);
  
  if(!product){
    throw new AppError('no such product',404)
  }
  return product
}
catch (error) {
    throw new Error('Error in delete product ');
}
}
const updateProducttomDB=async(id,item)=>{
    try{
        const product=await Product.findByIdAndUpdate(id,item,{new:true,runValidators:true})
        if(!product){
            throw new AppError('no such product',404)
          }
        return product
    }

    catch (error) {
        throw new Error('Error in update product');
    }
}

const addProducttomDB=async(item)=>{
    try{
        const pro=await Product.findById(item.id)

        if(pro){
            throw new AppError('Product already exist')
        }
        const product=await Product.create(item)
        console.log(product);
        
        return product  
    }
    catch (error) {
        console.log(error);
        
        throw new Error('Error add product from the database');
    }
}
const  getProductfromdb=async(id)=>{
    const product =await Product.findById(id)
    console.log(product);
    
    return product
}
module.exports = {getAllProductsFromDB,delProducttomDB,updateProducttomDB,addProducttomDB, getProductfromdb};
