const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller.js");
const auth = require("../../middlewares/auth.js");
const userValidation = require("../../validation/user.validation.js");

router.post(
  "/register",
  userValidation.validation,
  userController.userRegister
);
// Validatiopn for Joi pending using the following technique
//app.post("/register", userValidation.validation, userController.userRegister);

router.get("/all", auth.verifyAuth, userController.userAll);

router.get("/:username", userController.userGet);

module.exports = router;
