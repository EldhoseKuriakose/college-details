const express = require('express');

const router = express.Router();

console.log('Router Loaded');

router.use('/college', require('./college.router'));

module.exports = router;