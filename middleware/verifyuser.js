const jwt = require('jsonwebtoken');
const userModel = require('../user/user.model'); 
const secretkey = 'abcd';
const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization']
  if (!token) {
    return res.status(401).json({ err: 'No token provided' });
  }

  try {
    const tk = jwt.verify(token, process.env.SECRET_KEY || secretkey);
    const user = await userModel.findOne({ email: tk.email });
    if (!user) {
      return res.status(400).json({ err: 'No user found' });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error('Token verification error:', err.message);  // Log error details for debugging
    return res.status(401).json({ err: 'Invalid Token' });
  }
};
module.exports=verifyToken
