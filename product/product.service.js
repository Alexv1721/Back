const { NotfoundError, AppError } = require('../utils/custom.err');
const { getAllProductsFromDB, addProducttomDB,delProducttomDB,updateProducttomDB, getProductfromdb } = require('./product.db');
const productModel = require('./product.model');
const ProductService = {
getAllProducts: async () => {
        try {
            const products = await getAllProductsFromDB();
            return products;
        } catch (error) {
            throw new AppError('Error in get products')
        }
    }
,addProduct: async (item) => {
        try {
  
            const k = {
                cat: item.category, 
                description: item. description,
                 image: item. imageUrl
                , price: item.price, rating: {
                    rate: 0,
                    count: 0
                }
                , title: item.title
            }

            const product = await addProducttomDB(k);

            
            return product;
        } catch (error) {
            throw new AppError('Error add product ');
        }
    },
    deleteProduct: async (id) => {
        try {
            console.log(id);
            const product = await delProducttomDB(id);
          
            
            return product;
        } catch (error) {
            throw new AppError('Error in delete product');
        }
    },

    updateProduct: async (id,item) => {
        try {
            const product = await updateProducttomDB(id,item);
            return product;
        }
        catch (error) {
            throw new Error('Error update product');
        }
    }
,getProduct:async(id)=>{
try{
    const product= await getProductfromdb(id)
if(!product){
    throw new NotfoundError('product not found')
}
return product
}
catch(err){
throw err
}
}
}

module.exports = ProductService;
