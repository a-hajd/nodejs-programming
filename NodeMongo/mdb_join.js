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

  // Assume you have a collection called orders...
  dbo
    .collection("orders")
    .aggregate([
      {
        $lookup: {
          from: "products", // that contains a document from another collection (orders).
          localField: "product_id", // a field from the current collection...
          foreignField: "_id", // field from foreign collection that is to be added to original
          as: "orderdetails", // the field name that will be in the original collection containing the document from the foreign collection
        },
      },
    ])
    .toArray((err, res) => {
      if (err) throw err;
      console.log(JSON.stringify(res));
      db.close();
    });
});
