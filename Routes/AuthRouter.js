const { signup, login } = require('../Controller/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const express = require('express');
const router = express.Router();

// Login route

router.post('/login', loginValidation,login);
// Signup route with validation middleware
router.post('/signup', signupValidation,signup);


module.exports = router;
