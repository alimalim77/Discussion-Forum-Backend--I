const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/v1/index.js");
const app = express();

//Configuration for the dotenv service
dotenv.config();

// for parsing application/json
app.use(express.json());

// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Connecting to MongoDB service
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`Connected to ${process.env.MONGODB_URI}`));

//Route service for /user
app.use("/user", userRoutes);

// Listening to the protected PORT
app.listen(
  process.env.PORT,
  console.log(`App listening on ${process.env.PORT}`)
);
