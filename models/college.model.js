const mongoose = require('mongoose');

//Creating college schema
const collegeSchema = new mongoose.Schema({
    collegeId: {
        type: Number,
        required: true,
        unique: true
    },
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