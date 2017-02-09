var data = require("../data.json");

exports.addFriend = function(req, res) {
	var name = req.query.name;
	var description = req.query.description;
	var image = "http://lorempixel.com/400/400/people";

	data.friends.push({name: name, description: description, imageURL: image});

	res.render('index', data);
	
	console.log(data);
	// Your code goes here
}