const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

/* GET students listing. */
router.get("/", function (req, res, next) {
  Student.find({}, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

/* POST add student */
router.post("/", (req, res) => {
  var student = new Student({
    name: req.body.name,
    age: req.body.age,
    courses: req.body.courses,
  });

  student.save((err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

module.exports = router;
