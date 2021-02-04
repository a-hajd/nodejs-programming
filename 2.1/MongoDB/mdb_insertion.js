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

// Demo Customer Object
let customerObj = {
  name: "Company Inc.",
  address: "Highway 65",
};

MongoClient.connect((err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb"); // database object intializes database with method "db" which takes a String parameter of the database's name.
  dbo.collection("customers").insertOne(customerObj, (err, res) => {
    if (err) throw err;
    console.log("Document inserted. ");
    db.close();
  });
});

// Important: In MongoDB, a database is not created until it gets content!
// A database requires at least one collection with at least one document (or record) before anything is created.
