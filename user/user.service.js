const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
const  findUserByEmail=require('./user.db')
const  createNewUser =require('./user.db')
const UserService = {
    createUser: async (username, email, password) => {
        try {
            const exist = await findUserByEmail(email);
            if (exist) {
                throw new Error('User already exists, please login');
            }
            const newUser = await createNewUser(username, email, password);
            return newUser;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    loginUser: async (email, password) => {
        try {
            const user = await findUserByEmail(email);
            if (!user) {
                throw new Error('Invalid email. Try again.');
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                throw new Error('Invalid password');
            }
            const token = jwt.sign({ email }, process.env.JWT_SECRET || 'defaultSecretKey');
            return { token, user };
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = UserService;
