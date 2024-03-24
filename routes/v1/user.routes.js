const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller.js");
const auth = require("../../middlewares/auth.js");
const userValidation = require("../../validation/user.validation.js");

router.post("/register", userController.userRegister);
// app.post("/register", userValidation.validation, userController.userRegister);

router.get("/all", auth.verifyAuth);

module.exports = router;
