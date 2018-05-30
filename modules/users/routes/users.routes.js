var userController = require("../controller/userController")

module.exports = function (app) {
	app.route("/users").get(userController.getUsers);
	app.route("/users").post(userController.createUser);
	app.route('/users/:userId').get(userController.findUser);
	app.route('/users/:userId').put(userController.updateUser);
}

