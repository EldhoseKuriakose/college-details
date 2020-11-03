//Require student model
const Student = require('../models/student.model');

//Creating student details 
module.exports.createStudent = async function(req, res) {
    try {
        if(await req.body) {
            let students = await Student.create({
                studentId: req.body.studentId,
                studentName: req.body.studentName,
                yearOfBatch: req.body.yearOfBatch,
                collegeId: req.body.collegeId,
                skills: req.body.skills
            });

            students.save();

            return res.status(200).json({
                message: "successful"
            });
        } else {
            return res.status(400).json({
                message: "Error in saving details"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}