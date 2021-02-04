const express = require("express");

const baseRouter = require("./Routes/baseRouter.js");
const adminRouter = require("./Routes/adminRouter.js");

const app = express();
const admin = express();

app.use("/", baseRouter); // mounts base app to base router
app.use("/admin", adminRouter); // mounts admin app to admin base url.

var server = app.listen(8080, () => {
  var port = server.address().port;
  console.log("Server running on localhost on port %s", port);
});
