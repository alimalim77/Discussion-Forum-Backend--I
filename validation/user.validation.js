const Joi = require("joi");

const schema = Joi.object().keys({
  fullName: Joi.string().max(50),
  username: Joi.string().max(25).required(),
  email: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
    .required(),
});

const validation = (req, res, next) => {
  obj = req.body;
  const resp = schema.validate(obj);
  console.log(resp);
  if (resp.error) {
    return res.status(404).send({ message: resp.error }); // Return early if there's an error
  }
  next();
};

module.exports = { schema, validation };
