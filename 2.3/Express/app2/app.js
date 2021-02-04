var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var usersRouter = require("./routes/users");

const url = "mongodb://localhost:27017/UserAPI";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);

module.exports = app;
