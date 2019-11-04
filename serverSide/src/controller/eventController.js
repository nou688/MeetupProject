"use strict";

// External Dependancies
const boom = require("boom");
// Get Data Models
const Event = require("../models/event");
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
// Get single event by code
exports.getSingleEvent = async (req, reply, next) => {
  try {
    const code = req.params.code;
    const event = await Event.findOne({ code: code }, (err, data) => {
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
        event: event,
        message: "l'evenement est maintenant stocké en base de données"
      });
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing event
exports.updateEvent = async (req, reply) => {
  try {
    const id = req.params._id;
    const event = req.body;
    const { ...updateData } = event;
    const update = await Event.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a event
exports.deleteEvent = async (req, reply) => {
  try {
    const code = req.params.code;
    const event = await Event.findByIdAndRemove(code);
    req.json(event);
    return event;
  } catch (err) {
    throw boom.boomify(err);
  }
};
