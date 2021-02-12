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

/* PATCH update student */
router.patch("/:id", (req, res) => {
  Student.updateOne({ _id: req.params.id }, { $set: req.body }, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

/* DELETE student from database */
router.delete("/:id", (req, res) => {
  Student.remove({ _id: req.params.id }, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

module.exports = router;
