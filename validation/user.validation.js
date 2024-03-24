const Joi = require("joi");

const validation = Joi.object().keys({
  username: Joi.string().max(50),
  email: Joi.string().max(25).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

module.exports = { validation };
