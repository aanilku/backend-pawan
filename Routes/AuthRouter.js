const { signupValidation } = require('../Middlewares/AuthValidation');
const express = require('express');
const router = express.Router();

// Login route
router.post('/login', (req, res) => {
  res.send('login success');
});

// Signup route with validation middleware
router.post('/signup', signupValidation, (req, res) => {
  res.send('signup success');
});

module.exports = router;
