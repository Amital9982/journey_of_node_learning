const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017/";
const database = "ecom";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}

module.exports = dbConnect;
