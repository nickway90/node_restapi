var express = require("express")
var bodyParser = require("body-parser");

var router = express.Router();

// configure app to use bodyParser()
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var userController = require("../controller/userController")

router.get("/", userController.getUsers)
router.post("/", userController.createUser)
router.get("/:userId", userController.findUser)
router.put("/:userId", userController.updateUser)

module.exports = router;