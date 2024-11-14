//packages
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const cors = require("cors");
const bcrypt= require('bcryptjs/dist/bcrypt')
const jwt=require('jsonwebtoken')
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
//routes
const userRoutes=require('./user/user.route')
const productRoutes=require('./product/product.route')
const cartRoutes=require('./cart/cart.route')
const orderRoutes=require('./order/order.route');
const userModel = require('./user/user.model');
//middleware
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(express.json())
const GlobalError=require('./utils/Globalerror')


//handle routes
app.use("/user", userRoutes);
app.use('/products',productRoutes)
app.use('/cart',cartRoutes)
app.use('/order',orderRoutes)

//handle 404
app.all('*',(req,res,next)=>
{
  res.status(404).send('Invalid Request')
  next()
})

app.use(GlobalError)
app.listen(process.env.PORT||5000, () => console.log('server running'))
