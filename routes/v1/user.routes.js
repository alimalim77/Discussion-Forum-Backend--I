const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller.js");
const auth = require("../../middlewares/auth.js");
const userValidation = require("../../validation/user.validation.js");

// Routes to post the data with validation middlewares and controller method
router.post(
  "/register",
  userValidation.validation,
  userController.userRegister
);

// Routes to get all the data entries with authentication middleware and controller method
router.get("/all", auth.verifyAuth, userController.userAll);

// Route to get the data for a particular user with controller method
router.get("/:username", userController.userGet);

module.exports = router;
