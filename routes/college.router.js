//Import required dependencies or packages
const express = require('express');

const router = express.Router();

const collegeController = require('../controllers/college.controller');

//Routes for college
router.post('/create', collegeController.createCollege);
router.post('/getCollege', collegeController.getCollege);
router.post('/getSimilar', collegeController.getSimilarColleges);
router.get('/getAllColleges', collegeController.getAllColleges);

module.exports = router;