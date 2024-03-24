const UserService = require("../services/user.service.js");

const userRegister = async (req, res) => {
  const data = req.body;
  const resp = await UserService.registerUser(data);
  resp.code === 500
    ? res.status(500).send({})
    : res.status(resp.code).send(resp);
};

module.exports = { userRegister };
