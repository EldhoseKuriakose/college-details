//Import required dependencies or packages
const express = require('express');

const router = express.Router();

const studentController = require('../controllers/student.controller');

//Routes for student
router.post('/create', studentController.createStudent);

module.exports = router;