const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('./user.contoller');  // Destructure to import both functions

router.post('/register', createUser);
router.post('/login', loginUser);

module.exports = router;
