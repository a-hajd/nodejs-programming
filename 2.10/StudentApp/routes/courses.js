const express = require("express");
const router = express.Router();

const Course = require("../models/Course");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Course.find({}, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

module.exports = router;
