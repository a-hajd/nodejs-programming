const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Student.find({}, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

module.exports = router;
