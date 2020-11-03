const express = require('express');

const router = express.Router();

const collegeController = require('../controllers/college.controller');

router.post('/create', collegeController.createCollege);
router.post('/getCollege', collegeController.getCollege);
router.post('/getSimilar', collegeController.getSimilarColleges);

module.exports = router;