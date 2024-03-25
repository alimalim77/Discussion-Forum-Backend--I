const details = require("../models/user.model.js");

const registerUser = async (body) => {
  const push = await details
    .create(body)
    .then((res) => {
      return {
        code: 200,
        message: "New user registered",
      };
    })
    .catch((err) => {
      console.log(err);
      if (err.code === 11000)
        return {
          code: 409,
          message: "Failed to create new user",
          reason: "Already Exists in DB",
        };

      return { code: 500 };
    });
  return push;
};

const allUsers = async () => {
  const push = await details
    .find({})
    .then((res) => {
      if (res.length === 0) return { code: 404, message: "No Users found" };
      return { code: 201, data: res };
    })
    .catch((err) => {
      return { code: 500, message: err.message };
    });
  return push;
};

const getUser = async (username) => {
  const push = await details
    .find({ username: username })
    .then((res) => {
      if (res.length === 0)
        return { code: 404, message: "User not found!", username };
      return {
        code: 200,
        data: res,
      };
    })
    .catch((err) => {
      return { code: 502, message: err.message };
    });
  return push;
};

module.exports = { registerUser, allUsers, getUser };
