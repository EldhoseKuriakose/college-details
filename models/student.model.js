const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: {
        type: Number,
        required: true,
        unique: true
    },
    studentName: {
        type: String,
        required: true
    },
    yearOfBatch: {
        type: Number,
        required: true
    },
    collegeId: {
        type: Number,
        required: true
    },
    skills: [
        {
            type: String
        }
    ]
},{
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;