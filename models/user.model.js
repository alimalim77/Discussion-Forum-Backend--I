const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  fullName: {
    type: String,
    defaultValue: "",
    maxLength: 50,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 25,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
});

const details = mongoose.model("Details", detailSchema);

module.exports = details;
