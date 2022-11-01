const mongoose = require('mongoose');

const bookFlightTemplate = new mongoose.Schema({
    //details to collect from users
    firstName :{type:String, required:true},
    lastName :{type:String, required:true},
    email:{type:String,unique:true, required:true},
    fromAirport:{type:String, required:true},
    toAirport:{type:String,required:true},
    company:{type:String, required:true},
    dateOfDeparture:{type:String, required:true},
    password:{type:String,required:true,unique:true},
    date:{type:Date, default:Date.now}
})
//myBookings is the table in the db
mongoose.exports =mongoose.model('booking',bookFlightTemplate)