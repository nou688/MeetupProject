"use strict";

// External Dependancies
const boom = require("boom");
// Get Data Models
const Event = require("../models/event");
/* get all Event */
exports.getEvents = async (req, reply) => {
  try {
    const events = await Event.find(function(err, res) {
      if (err) {
        reply.send(err);
      }
      reply.json(res);
    });
    return events;
  } catch (err) {
    throw boom.boomify(err);
  }
};
/**
 * Get single event by code
 *
 *
 ***/
exports.getSingleEvent = async (req, reply, next) => {
  try {
    const id = req.params.id;
    const event = await Event.findOne({ _id: id }, (err, data) => {
      if (err) {
        reply.send(err);
      } else {
        reply.json(data);
        next();
      }
    });
    return event;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new event
exports.addEvent = async (req, reply) => {
  try {
    const event = new Event(req.body);
    event.save(function(err, event) {
      if (err) {
        reply.send(err);
      }
      reply.json({
        event: event._id,
        message: "event updated"
      });
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing event
exports.updateEvent = async (req, reply) => {
  try {
    const id = req.params.id;
    const event = req.body;
    const { ...updateData } = event;
    const update = await Event.findOneAndUpdate(id, updateData, {
      new: true,
      useFindAndModify: false
    });
      reply.json({
          event:updateData,
          message: "event updated"
      });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a event
exports.deleteEvent = async (req, reply) => {
  try {
    const id = req.body.id;
    const event = await Event.findOneAndDelete(id,{
        useFindAndModify: false  });
      reply.json({
          message: "event deleted"
      });
    return event;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.getMemberFromEvent = async (req, reply, next) => {
    try {
        const id_event = req.body.id;
        const email = req.body.email;
      const event = await Event.find( {_id: id_event },
            { members: { $elemMatch: { email: email } } } );
        return event;
    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.addMemberToEvent = async (req, reply) => {
    var objMember={first_name: "nouha", last_name: "Gh", company_name: "Meritis",address: "14 rue pierre", city: "Paris", county: "France",state: "LA", zip: 70116, phone1: "504-621-8927", phone2: "504-845-1427", email: "nouha.ghribi@gmail.com", web: "http://www.bentonjohnbjr.com"};
    try {
       // const id = req.params.id;
        const id = req.body.id;
       // const {...updateData} = event;
        const update = await Event.findOneAndUpdate(
            id, {$push: {members: objMember}},
            function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    reply.json({
                        member: objMember,
                        message: "add member to event"
                    });
                    console.log(success);
                }
            });
    }
    catch (err) {
        throw boom.boomify(err);
    }

};