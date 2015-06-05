// Dependencies
var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');


// MongoDB
mongoose.connect('mongodb://localhost/recipes');


// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.use('/api', require('./routes/api'));


// Start Server
app.listen(4040);