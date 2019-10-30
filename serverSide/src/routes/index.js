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
const routes = express.Router();

// middleware that is specific to this router
routes.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
routes.get('/', function (req, res) {
    res.send('Event home page')
})
// define the about route
routes.get('/events', function (req, res) {
    res.send('About birds')
})

module.exports = routes;
