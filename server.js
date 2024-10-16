const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const PORT = 5000
const cors = require("cors");
const bcrypt= require('bcryptjs/dist/bcrypt')
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
const userRoutes=require('./user/user.route')
const productRoutes=require('./product/product.route')
const cartRoutes=require('./cart/cart.route')
const orderRoutes=require('./order/order.route')
//middleware
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(express.json())
app.use("/user", userRoutes);
app.use('/products',productRoutes)
app.use('/cart',cartRoutes)
app.use('/order',orderRoutes)
app.all('*',(req,res,next)=>
{
  res.status(404).send('Invalid Request')
  next()
})
const jwt=require('jsonwebtoken')

const secretkey='abcd'

const VerrifyToken=(req,res,next)=>{

  const token=req.headers['autharization']
  if(!token){
return  res.status(401).json({err:'Unothaeized Error'})
  }
jwt.verify(token,secretkey,(decode,error)=>{
  if(error){
    return  res.status(401).json({err:'Unothaeized Error'})
  }
  req.user=decode
})
next()
}


// app.delete('/api/removecart/:id', async (req, res) => {
//   const id = req.params['id']
//   const k = await Carts.findByIdAndDelete(id)
//   res.send('deleted Sucessfully ')
// })
// app.post('/api/addorder/:id', async (req, res) => {
//   const item = await Carts.findOne({ _id: req.params.id })
//   console.log(item);

//   if (item) {
//     const k = {
//       cat: item.cat, description: item.description, image: item.image
//       , price: item.price, rating: {
//         rate: item.rating.rate,
//         count: item.rating.count
//       }
//       , title: item.title
//     }
//     const m = await order.create(k);


//     await Carts.deleteOne({ _id: req.params.id })
//   }

// })
// app.post('/api/addorders',async(req,res)=>{
//   const data =await req.body
// await order.create()
//   await order.insertMany(data)
 
// })
app.listen(PORT, () => console.log('server running')
)