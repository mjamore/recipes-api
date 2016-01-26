// Dependencies
var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');


// MongoDB
mongoose.connect('mongodb://localhost/recipes');


// Express
var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
}

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCrossDomain);


// Routes
app.use('/api', require('./routes/api'));


// Start Server
app.listen(8000);