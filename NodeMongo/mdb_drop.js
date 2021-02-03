const mongo = require("mongodb");

/*
 * Database Creation:
 * 1. Create MongoClient object.
 * 2. Specify a connection URL with the correect ip address and name of the database you want to create
 * If it does not exist, MongoDB will create, otherwise, it will establish a connection
 */

const url = "mongodb://localhost:27017/mydb";

const MongoClient = require("mongodb").MongoClient(url, {
  useUnifiedTopology: true,
});

MongoClient.connect((err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");

  /* Method 1

  // In this context, the res is a true or false on whether the collection was dropped

  dbo.collection("customers").drop((err, res) => {
    if (err) throw err;
    if (res) console.log("Collection deleted. ");
    db.close();

  }); */

  /* Method 2

  dbo.dropCollection("custoemrs", (err, res) => {
      if (err) throw err;
      if (res) console.log("Collection deleted. ");
      db.close();
    }); */
});
