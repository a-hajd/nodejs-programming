const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

var corsOptions = {
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.options("*", cors()); // include before other routes

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    await bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      if (err) console.log(err);

      var user = {
        username: req.body.username,
        password: hashedPassword,
      };
      users.push(user);
      res.status(201).send();
    });
  } catch {
    res.status(500).send();
  }
});

app.post("/users/login", cors(corsOptions), async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const user = users.find((user) => user.username === req.body.username);
  if (user == null) {
    return res.status(404).send("Cannot find user");
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(200).send();
    } else {
      res.status(401).send();
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(8080);
