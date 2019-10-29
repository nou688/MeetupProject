// External Dependancies
const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    company_name: String,
    address: String,
    city:String,
    county:String,
    state:String,
    zip:String,
    phone1:String,
    phone2:String,
    email:String,
    web:String
});
module.exports = mongoose.model('Member', memberSchema);