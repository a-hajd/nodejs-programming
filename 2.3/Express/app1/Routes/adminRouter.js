const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Received get request for " + req.path);
});

module.exports = router;
