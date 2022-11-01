const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
dotenv.config()
const app = express()

//connect application to db
mongoose.connect('mongodb://localhost:27017/bookingDB')











 


app.listen(process.env.PORT,()=>{
    console.log("server listening on port" + " "+ process.env.PORT)
});