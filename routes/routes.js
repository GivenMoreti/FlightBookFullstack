const express = require("express");
const router = express.Router()
const bookFlightTemplateCopy =require('../models/bookModels')
const bcrypt = require("bcrypt");



router.post("/book",async(request,response)=>{
   const saltRounds = await bcrypt.genSalt(10)
   const securePassword = await bcrypt.hash(request.body.password,saltRounds);

   const bookedTrip = new bookFlightTemplateCopy({
    firstName:request.body.firstName,
    lastName:request.body.lastName,
    email:request.body.email,
    fromAirport:request.body.fromAirport,
    toAirport:request.body.toAirport,
    company:request.body.company,
    dateOfDeparture:request.body.dateOfDeparture,
    password:securePassword,
    passwordConfirmed:securePassword
   });
   //confirm password 

   bookedTrip.save()
   .then(data=>{
    response.json(data)
   })
   .catch(err=>{
    response.json(err)
   });



})

module.exports = router

//for login use get request.