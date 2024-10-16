const userService = require('./user.service');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userService.createUser(username, email, hashedPassword);
        return res.status(201).json({ msg: 'User Created Successfully', newUser });
    } catch (error) {
        return res.status(500).json({ err: 'Cannot create the user', details: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await userService.loginUser(email, password);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ err: 'Login Failed', details: error.message });
    }
};

// Use CommonJS exports
module.exports = { createUser, loginUser };
