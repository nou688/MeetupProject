// External Dependancies

const Member = require('../Member');
const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    code: String,
    title: String,
    dateStart: String,
    dateEnd: String,
    description: String,
    address: String,
    members: [Member]});
module.exports = mongoose.model('Event', eventSchema);