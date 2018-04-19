var express = require("express")
var mongo = require("./config/mongod")

var port = process.env.PORT || 3000;        // set our port

var app = express()
// importing middlware 
var middlware = require("./config/middleware")
app.use(middlware)
// importing  cors  (cross origin request policy)
var cors = require("./config/cors")

// if you enable cors uncommnet below line
// app.use(cors)

// importing the all routes 
var routes = require("./routes")
routes(app)

app.listen(port, () => {
  console.log("Server is running on " + port);
  //console.log("CORS-enabled web server listening on port " + port)
});