// Dependencies
var express = require('express');
var router = express.Router();


// Models
var Recipe = require('../models/recipe');
var Tag = require('../models/tag');


// Routes
Recipe.methods(['get', 'put', 'post', 'delete']);
Recipe.register(router, '/recipes');

Tag.methods(['get', 'put', 'post', 'delete']);
Tag.register(router, '/tags');


// Return router
module.exports = router;