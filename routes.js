var userController = require("./app/modules/routes/userRoutes")
module.exports = function (app) {
  app.use('/users', userController)
}