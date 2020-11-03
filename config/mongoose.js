//Require mongoose
const mongoose= require('mongoose');

//To fix all deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//Database url
const URL = "mongodb+srv://college-details:college-details@123@cluster0.ux31b.mongodb.net/college-details?retryWrites=true&w=majority";

const db = async () => {
    await mongoose.connect(URL);
    console.log("Connected to Database:: MongoDB");
};

module.exports = db;