//Import required dependencies or packages
const express = require('express');
var bodyParser = require('body-parser');
const db = require('./config/mongoose');
const cors = require('cors');

const app = express();

db();

//Setting port for server to listen
const Port = process.env.Port || 8000;

//Using body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//use express router
app.use('/', require('./routes/index.router'));

//Server listening to port
app.listen(Port, function(err){
    if(err){
        console.log(`Error:, ${err}`);
    }
    console.log(`Server is running on port: ${Port}`);
});