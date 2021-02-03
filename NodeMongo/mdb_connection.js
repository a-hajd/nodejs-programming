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
  var dbo = db.db("mydb"); // database object intializes database with method "db" which takes a String parameter of the database's name.
});
