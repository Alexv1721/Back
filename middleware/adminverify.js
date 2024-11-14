const jwt = require('jsonwebtoken');
const userModel = require('../user/user.model'); 
const adminVerifier=async(req,res,next)=>{
    const  secretkey='abcd'
    const token= req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ err: 'Unauthorized Error' });
    }
    try {
      const tk = jwt.verify(token, process.env.SECRET_KEY || secretkey);
      const user = await userModel.findOne({ email: tk.email });
      process.env.SECRET_KEY 
     
      if (!user) {
        return res.status(400).json({ err: 'No user Found' });
      }
      console.log(user.role);
      
      if(user.role=='' || user.role=='normal' || user.role==undefined){
        return res.status(400).json({msg:'You are not Permitted,Unauthorized'})
    }
      req.user=user;
      next();
    } catch (err) {
      return res.status(401).json({ err: 'Invalid Token' });
    }
}

module.exports=adminVerifier