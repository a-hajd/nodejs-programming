const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

const users = [{ name: "Name" }];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(salt, hashedPassword);
  } catch {}

  var user = {
    name: req.body.name,
    password: req.body.password,
  };
  users.push(user);

  res.status(201).send();
});

app.listen(3000);
