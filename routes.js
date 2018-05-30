var userController = require("./app/modules/routes/index")
module.exports = function (app) {
  app.use('/users', userController)
}