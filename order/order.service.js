const {getOrdersFromDB,addordertodb,addorderstoDB} = require('./order.db');
const { NotfoundError, AppError } = require('../utils/custom.err');
const OrderService = {
    getorders: async (uid) => {
        try {
            const orders = await getOrdersFromDB(uid);  
            return orders;
        } catch (err) {
            throw new AppError('Error fetching orders ');
        }
    }
    ,
addorder:async(id,uid,count)=>{
try{
    const order=await addordertodb(id,uid,count)
    return order
}
catch(err){
    throw new AppError('Error in add order ')
}
    }
,addorders:async(data,uId)=>{
try{
    await addorderstoDB(data,uId)
}
catch(err){

    throw new AppError('Error in add order ')
}
}
};

module.exports = OrderService;
