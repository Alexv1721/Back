const User = require('./user.model');

// Find user by email
const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email }).lean();
        return user;
    } catch (error) {
        throw new Error('Database query error');
    }
};


const createNewUser = async (username, email, password) => {
    try {
        const user = new User({
            username,
            email,
            password
        });
        const response = await user.save();
        return response;
    } catch (error) {
        throw new Error('User creation failed');
    }
};
module.exports={findUserByEmail,createNewUser }