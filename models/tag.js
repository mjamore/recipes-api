// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


// Schema
var tagSchema = new mongoose.Schema({
	"text": String
});


// Return model
module.exports = restful.model('Tags', tagSchema);