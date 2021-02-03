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
  var myquery = { address: "Canyon 123" };
  var newvalues = { $set: { address: "Canyon 654" } };

  dbo
    .collection("customers")
    .updateMany(
      { address: "Highway 65" },
      { $set: { address: "Highway 66" } },
      (err, res) => {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        db.close();
      }
    );

  //   dbo.collection("customers").updateOne(myquery, newvalues, (err, res) => {
  //     if (err) throw err;
  //     console.log("1 document updated. ");
  //     db.close();
  //   });
});
