// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


// Schema
var receipeSchema = new mongoose.Schema({
	name: String,
	author: String,
	category: String,
	tags: [String],
	time: {
		prep_time: String,
		cook_time: String,
		total_time: String
	},
	ingredients:  [
		{
			ingredient: String,
			quantity: String,
			measure: String,
			preparation: String
		}
	],
	directions: String,
	images: [String]
});


// Return model
module.exports = restful.model('Recipes', receipeSchema);