const College = require('../models/college.model');

module.exports.getCollege = async function(req, res) {
    try {
        if(await req.body) {
            var resultId = await College.findOne({collegeId: req.body.collegeId});
            var resultName = await College.findOne({collegeName: req.body.collegeName});

            if(resultId) {
                return res.status(200).json({
                    message: "success",
                    data: resultId
                });
            } else if(resultName) {
                return res.status(200).json({
                    message: "success",
                    data: resultName
                });
            } else {
                return res.status(404).json({
                    message: "Data not found"
                });
            }
        } else {
            console.log("error");
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports.createCollege = async function(req, res) {
    try {
        if(await req.body) {
            let colleges = await College.create({
                collegeId: req.body.collegeId,
                collegeName: req.body.collegeName,
                yearFounded: req.body.yearFounded,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
                noOfStudents: req.body.noOfStudents,
                courses: req.body.courses
            });
    
            colleges.save();
    
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

