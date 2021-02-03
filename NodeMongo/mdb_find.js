const mongo = require("mongodb");

/*
 * Database Creation:
 * 1. Create MongoClient object.
 * 2. Specify a connection URL with the correect ip address and name of the database you want to create
 * If it does not exist, MongoDB will create, otherwise, it will establish a connection
 */

const url = "mongodb://localhost:27017";
const database = "mydb";
const collection = "customers";

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
  var dbo = db.db(database); // database object intializes database with method "db" which takes a String parameter of the database's name.
  var query = { name: new RegExp("com", "i") };

  dbo
    // .collection("customers").findOne(customerObj, (err, res) => { -- RETURNS FIRST DOCUMENT

    .collection(collection)
    .find({})
    .toArray((err, res) => {
      // -- RETURNS ALL DOCUMENTS AS AN ARRAY

      // .collection("customers")
      // .find({}, { projection: { _id: 0, name: 1, address: 1 } }) // adding a json object with a projection property allows you to toggle a field's visiblity
      // .toArray((err, res) => {  -- RETURNS NAME AND ADDRESS OF ALL OBJECTS ( EXCLUDES ID )

      // .collection("customers")
      // .find(query, { projection: { _id: 0 } })
      // .toArray((err, res) => {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});

// Important: In MongoDB, a database is not created until it gets content!
// A database requires at least one collection with at least one document (or record) before anything is created.
