const asyncErrorhandler = require('../utils/asyncErrorhandler');
const AppError = require('../utils/custom.err');
const userService = require('./user.service');
const bcrypt = require('bcryptjs');
const createUser = asyncErrorhandler(
    async (req, res) => {
        const { username, email, password,role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userService.createUser(username, email, hashedPassword,role);
        return res.status(201).json({ msg: 'User Created Successfully', newUser }); 
    }
)
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXh2MTcyMkBnbWFpbC5jb20iLCJpYXQiOjE3Mjk0NzEzNTN9.5VL0ZenfTwbKZLTm17qhtofnBRYxMczBiwMHF9bhunA
const loginUser = asyncErrorhandler(async (req, res) => {
    const { email, password } = req.body;

    
    if(password=='' || password==undefined)
        {
            return res.status(400).json({mgs:'Password is required',statuscode:400})
        }
    if(email=='' || email=='undefined'){
            throw new AppError('Email is required')
    }
    const result = await userService.loginUser(email, password);
    return res.status(200).json(result);

}
)
const role=asyncErrorhandler(async(req,res,next)=>{
    const role=await userService.getrole(req.headers['authorization'])
    return res.status(200).json({data:role})

})
const user=asyncErrorhandler(async(req,res)=>{
   
const user= await userService.getuser(req.headers['authorization'])
return res.status(200).json({data:user})

})
module.exports = { createUser, loginUser,user ,role};
