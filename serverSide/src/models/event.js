// External Dependancies

const Member = require('./member');
const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    code: String,
    title: String,
    dateStart: String,
    dateEnd: String,
    description: String,
    address: String,
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'Member'}],
});
module.exports = mongoose.model('Event', eventSchema);