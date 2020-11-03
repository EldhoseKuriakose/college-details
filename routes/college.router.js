const express = require('express');

const router = express.Router();

const collegeController = require('../controllers/college.controller');

router.post('/getCollege', collegeController.getCollege);
router.post('/create', collegeController.createCollege);

module.exports = router;