const UserService = require("../services/user.service.js");

//Controller method with response handlers for registering the user
const userRegister = async (req, res) => {
  const data = req.body;
  const resp = await UserService.registerUser(data);
  resp.code === 500
    ? res.status(500).send({})
    : res.status(resp.code).send(resp);
};

//Controller method with response handlers for getting all the users
const userAll = async (req, res) => {
  const resp = await UserService.allUsers();
  res.status(resp.code).send(resp);
};

//Controller method with response handlers for getting a particular user
const userGet = async (req, res) => {
  const params = req.params.username;
  const resp = await UserService.getUser(params);
  res.status(resp.code).send(resp);
};

module.exports = { userRegister, userAll, userGet };
