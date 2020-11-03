//Import required dependencies or packages
const express = require('express');

const router = express.Router();

console.log('Router Loaded');

//All routes
router.use('/college', require('./college.router'));
router.use('/student', require('./student.router'));

module.exports = router;