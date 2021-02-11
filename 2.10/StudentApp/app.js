const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const courseRouter = require("./routes/courses.js");
const studentRouter = require("./routes/students");

const app = express();
const url = "mongodb://localhost:27017/StudentAPI";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/students", studentRouter);
app.use("/courses", courseRouter);

module.exports = app;
