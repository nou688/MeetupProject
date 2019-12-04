'use strict';
require('dotenv').config();
var express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/config/swagger.json');
var routes = require("./src/routes");
const environment = process.env.NODE_ENV; // development
const config = require('./src/config/config')[environment];
//var port = 3000;
var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
mongoose.connect( `${config.database_url}`, options).then(() => {
    console.log(`Connected to Database  ${config.database_url}`);
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function (){
    console.log("Connexion à la base OK");
});
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', routes);
app.listen(`${config.port}`, `${config.hostname}`, function(){
    console.log("Mon serveur fonctionne sur http://"+ `${config.hostname}` +":"+`${config.port}`);
});
module.exports = app;