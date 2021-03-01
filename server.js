// Entry point for the application

// express application
var express = require('express');
var cors = require('cors');

var bodyParser = require('body-parser');

// require the controller we make
var c = require('./controller');
var controller = c.controller;

var app = express();

// set up template engine
// app.set('view engine', 'ejs');

// static file serving
app.use(express.static('./public'));
app.use(cors());
app.use(bodyParser.json())
// fire function from surveyController
controller(app);

// listen to port
app.listen(4000);
console.log('listening port 4000');
