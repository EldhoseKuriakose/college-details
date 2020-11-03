const express = require('express');

const router = express.Router();

console.log('Router Loaded');

router.use('/college', require('./college.router'));
router.use('/student', require('./student.router'));

module.exports = router;