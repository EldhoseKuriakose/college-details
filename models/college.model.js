const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true
    },
    yearFounded: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    noOfStudents: {
        type: Number,
        required: true
    },
    courses: [
        {
            type: String,
            required: true
        }
    ]
},{
    timestamps: true
});

const College = mongoose.model('College', collegeSchema);
module.exports = College;