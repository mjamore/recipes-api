// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


// Schema
var categorySchema = new mongoose.Schema({
	"category": String
});


// Return model
module.exports = restful.model('Categories', categorySchema);