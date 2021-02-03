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
let customerObjects = [
  //  _id: 143, -- Adding a '_id' parameter allows you to add custom ids, but they must be unique for each document.
  { name: "Amy", address: "Apple st 652" },
  { name: "Ben", address: "Park Lane 38" },
  { name: "Betty", address: "Green Grass 1" },
  { name: "Chuck", address: "Main Road 989" },
  { name: "Hannah", address: "Mountain 21" },
];

MongoClient.connect((err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb"); // database object intializes database with method "db" which takes a String parameter of the database's name.
  dbo.collection("customers").insertMany(customerObjects, (err, res) => {
    if (err) throw err;
    console.log("Inserted " + res.insertedCount + " documents.");
    db.close();
  });
});

// Important: In MongoDB, a database is not created until it gets content!
// A database requires at least one collection with at least one document (or record) before anything is created.
