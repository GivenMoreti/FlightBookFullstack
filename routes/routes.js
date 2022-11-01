const express = require("express");
const router = express.Router()
const bookFlightTemplateCopy =require('../models/bookModels')

router.post("/book",(request,response)=>{
   const bookedTrip = new bookFlightTemplateCopy({
    firstName:request.body.firstName,
    lastName:request.body.lastName,
    email:request.body.email,
    fromAirport:request.body.fromAirport,
    toAirport:request.body.toAirport,
    company:request.body.company,
    dateOfDeparture:request.body.dateOfDeparture,
    password:request.body.password
   })
   bookedTrip.save()
   .then(data=>{
    response.json(data)
   })
   .catch(err=>{
    response.json(err)
   });



})

module.exports = router