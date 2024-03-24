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

module.exports = { registerUser };
