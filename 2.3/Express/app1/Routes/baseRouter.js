const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Received GET request");
  res.send("Hello, world!");
});

router.get("/list_user", (req, res) => {
  console.log("Received GET request for /list_user");
  res.send("Page Listing");
});

router.post("/", (req, res) => {
  console.log("Received POST request");
  res.send("Hello POST");
});

router.delete("/del_user", (req, res) => {
  console.log("Received DELETE request for /del_user");
  res.send("Hello DELETE");
});

module.exports = router;
