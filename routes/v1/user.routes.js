const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController.js");
const userValidation = require("../../validation/user.validation.js");

router.post("/register", userController.userRegister);
// app.post("/register", userValidation.validation, userController.userRegister);

module.exports = router;
