var mongoose = require("mongoose")

var URL = "mongodb://localhost:27017/testing"

mongoose.connect(URL).then((resp) => {
  console.log("Successfully connected to the database.")
}).catch((error) => {
  console.log("Error while connecting the database ...")
  console.log("Please install mongod database or if you have it then start it.")
})