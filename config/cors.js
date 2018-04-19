var cors = require("cors")

// cors options
var corsOptions = {
  origin: "http://localhost",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
// enable the cors 
module.exports = cors(corsOptions)