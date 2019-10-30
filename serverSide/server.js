/*const path = require("path");
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
const port = process.env.PORT || "8000";
app.get("/", (req, res) => {
    res.status(200).send("Meetup Test");
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
exports = app;

*/
var express = require('express');
var routes = require("./src/routes");
var hostname = 'localhost';
var port = 3000;
var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
var urlmongo = "mongodb://127.0.0.1:27017/meetupdb";
mongoose.connect(urlmongo, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function (){
    console.log("Connexion à la base OK");
});
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/v1', routes);
app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
exports = app;