const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    yearOfBatch: {
        type: Number,
        required: true
    },
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
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