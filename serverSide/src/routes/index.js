/ Import our Controllers
const eventController = require('../controller/eventController')

const routes = [
    {
        method: 'GET',
        url: '/api/events',
        handler: eventController.getEvents
    },
    {
        method: 'GET',
        url: '/api/events/:code',
        handler: eventController.getSingleEvent
    },
    {
        method: 'POST',
        url: '/api/events',
        handler: eventController.addEvent,
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
]

module.exports = routes;