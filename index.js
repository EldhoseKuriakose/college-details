const express = require('express');
const db = require('./config/mongoose');

const app = express();

db();

const Port = process.env.Port || 8000;

//Server listening to port
app.listen(Port, function(err){
    if(err){
        console.log(`Error:, ${err}`);
    }
    console.log(`Server is running on port: ${Port}`);
});