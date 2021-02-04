const express = require("express");
const router = express.Router();

const User = require("../models/User"); // With mongoose, you access the collection through the model.

/* GET home page. */
router.get("/", function (req, res, next) {
  User.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.post("/", (req, res) => {
  let user = new User({
    name: req.body.name,
    age: req.body.age,
  });

  user.save((err, data) => {
    if (err) throw err;
    console.log(data);
  });

  res.send(user);
});

module.exports = router;
