const path = require("path");
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