const express = require("express");
const router = express.Router();

const User = require("../models/User"); // With mongoose, you access the collection through the model.
const mongoQuery = require("../logic/query");

// GET all users
router.get("/", function (req, res, next) {
  // If query is not empty, create a mongo query
  if (JSON.stringify(req.query) !== "{}") {
    var query = mongoQuery(User, req.query);
    query.name = { $regex: query.name, $options: "i" };
  }

  User.find(mongoQuery(User, req.query), (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

// GET user by id
router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

// POST add new user
router.post("/", (req, res) => {
  let user = new User({
    name: req.body.name,
    age: req.body.age,
  });

  user.save((err, data) => {
    if (err) throw console.log(err);
    console.log(data);
  });

  res.send(user);
});

// DELETE user by id
router.delete("/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

// PUT user update by id
router.put("/:id", (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    { $set: { name: req.body.name, age: req.body.age } },
    (err, data) => {
      if (err) console.log(err);
      res.json(data);
    }
  );
});

module.exports = router;
