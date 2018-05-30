var mongoose = require("mongoose")
var config = require('./index');
var path = require('path');
var glob = require('glob');

var URL = config.DB_URL



module.exports = function () {
	// making all models global access 
	mongoose.Promise = global.Promise;
	console.log("DB URL " + URL);
	db = mongoose.connect(URL).then((resp) => {
		console.log("Successfully connected to the database.")
	}).catch((error) => {
		console.log("[*] Please install mongod database or if you have it then start it.")
	})

	// adding all modules schemas to global
	glob(path.dirname(require.main.filename) + '/modules/**/schemas/*.js', function (err, files) {
		console.log("DB Models "+files)
		if (files && files.length) {
			files.forEach(function (file) {
				require(file);
			});
		}
	});
	return db;
}