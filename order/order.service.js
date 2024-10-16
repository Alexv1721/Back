const {getOrdersFromDB,addordertodb,addorderstoDB} = require('./order.db');

const OrderService = {
    getorders: async () => {
        try {
            const orders = await getOrdersFromDB();  
            return orders;
        } catch (err) {
            throw new Error('Error fetching orders in service');
        }
    }
    ,
addorder:async(id)=>{
try{
    const order=await addordertodb(id)
    return order
}
catch(err){
    throw new Error('Error in adding to db')
}
    }




,addorders:async(data)=>{
try{
    await addorderstoDB(data)
}
catch{
    throw new Error('Fail to add to db')
}
}
};

module.exports = OrderService;
