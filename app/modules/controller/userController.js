var User = require("../schema/userSchema")

exports.createUser = function (req, resp) {
  User.create({
    "name": req.body.name,
    "email": req.body.email,
    "password": req.body.password
  }).then((response) => {
    resp.status(201).json({ "message": "Successfully registered with us." })
  }).catch((error) => {
    resp.status(500).json({ "message": "Internal Problem." })
  })
}

exports.getUsers = function (req, resp) {
  User.find({}).then((response) => {
    resp.status(200).json(response)
  }).catch((error) => {
    resp.status(500).json({ "message": "Internal Problem." })
  })
}

exports.findUser = function (req, resp) {
  User.findOne({ "_id": req.params.userId }).then((response) => {
    resp.status(200).json(response)
  }).catch((error) => {
    resp.status(500).json({ "message": "Internal Problem." })
  })
}

exports.updateUser = function (req, resp) {
  var update = { "name": req.body.name }
  User.update({ "_id": req.params.userId }, update).then((response) => {
    if (response["n"] == 1) {
      resp.status(200).json({ "message": "user updated." })
    } else {
      resp.status(500).json({ "message": "Internal Problem." })
    }
  }).catch((error) => {
    resp.status(500).json({ "message": "Internal Problem." })
  })
}