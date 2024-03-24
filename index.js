const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/v1/index.js");
const app = express();

dotenv.config();
app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`Connected to ${process.env.MONGODB_URI}`));

app.use("/user", userRoutes);
//app.get("/", (req, res) => res.send("Hello, world!"));

app.listen(
  process.env.PORT,
  console.log(`App listening on ${process.env.PORT}`)
);
