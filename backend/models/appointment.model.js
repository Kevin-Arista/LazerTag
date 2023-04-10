const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    fname: {type: String, require: true, maxLength:70, default: "unknown"},
    lname: {type: String, require: true, maxLength:70, default: "unknown"},
    partysize: {type: String, require: true, maxlength: 2, default: "1"},
    countrycode: {type: String, require: true, maxlength: 5, default: "1"},
    phonenumber: {type: String, require: true, maxlength: 15, default: "0000000000"}
});

const AppointmentModel = mongoose.model("AppointmentModel", AppointmentSchema);
module.exports = AppointmentModel;