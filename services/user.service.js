const details = require("../models/user.model.js");

// Service for registering the user
// 200 - Successful registration
// 409 - Already registered
// 500 - Internal server error
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

      return { code: 500, message: err.message };
    });
  return push;
};

// Service to get all the users
// 201 - Successful fetching all the users
// 404 - No users found
// 500 - Internal server error
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

// Service to get a particular user
// 200 - Successful user fetch
// 404 - User not found
// 500 -Internal server error
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
      return { code: 500, message: err.message };
    });
  return push;
};

module.exports = { registerUser, allUsers, getUser };
