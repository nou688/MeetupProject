'use strict';
// Import our Controllers
const eventController = require('../controller/eventController');

/*const routes = [
    {
        method: 'GET',
        url: '/api/events',
        handler:
    },
    {
        method: 'GET',
        url: '/api/events/:code',
        handler: eventController.getSingleEvent
    },
    {
        method: 'POST',
        url: '/api/events',
        handler: ,
       // schema: documentation.addEventSchema
    },
    {
        method: 'PUT',
        url: '/api/events/:code',
        handler: eventController.updateEvent
    },
    {
        method: 'DELETE',
        url: '/api/events/:code',
        handler: eventController.deleteEvent
    }
]*/
var express = require('express');
var routes = express()
//const routes = app.Router();

// middleware that is specific to this router

// define the home page route
routes.get('/', function (req, res) {
    res.send('Event home page')
})
// define the about route
routes.route('/events')
    .get(eventController.getEvents)
    .post(eventController.addEvent);
routes.route('/event/:id')
    .get(eventController.getSingleEvent)
    .put(eventController.updateEvent)
    .delete(eventController.deleteEvent);
routes.route('/members').get(eventController.getMemberFromEvent).
put(eventController.addMemberToEvent);
/*routes.get('/events', function (req, res) {
    res.send('About birds')
})*/

module.exports = routes;
