var express = require("express")
var mongo = require("./config/mongod")
var config = require("./config/index")
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var glob = require('glob');

var port = config.PORT   // set our port

var app = express()
// importing middlware 
var middlware = require("./config/middleware")
app.use(middlware)
// importing  cors  (cross origin request policy)
var cors = require("./config/cors")
// creating mongodb connection
var db = mongo()

// if you enable cors uncommnet below line
// app.use(cors)
// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// logs in developement
if (process.env.APP_ENV == 'development') {
	app.use(logger('dev'));
} else {
	//app.use(compress());
}
// Adding all routes from modules by passing app to the routes with the help of glob
glob(path.dirname(require.main.filename) + '/modules/**/routes/*.js', function (err, files) {
	console.log(files);
	if (files && files.length) {
		files.forEach(function (file) {
			require(file)(app);
		});
	}
});

app.listen(port, () => {
	console.log("Server is running on " + port);
});