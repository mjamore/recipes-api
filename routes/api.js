// Dependencies
var express = require('express');
var router = express.Router();


// Models
var Recipe = require('../models/recipe');


// Routes
Recipe.methods(['get', 'put', 'post', 'delete']);
Recipe.register(router, '/recipes');


// Return router
module.exports = router;