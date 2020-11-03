const express = require('express');
var bodyParser = require('body-parser');
const db = require('./config/mongoose');

const app = express();

db();

const Port = process.env.Port || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//use express router
app.use('/', require('./routes/index.router'));

//Server listening to port
app.listen(Port, function(err){
    if(err){
        console.log(`Error:, ${err}`);
    }
    console.log(`Server is running on port: ${Port}`);
});