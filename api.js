const express = require("express");
const dbConnect = require("./mongodb");
const app = express();
app.use(express.json());
/*Get Api method (data read from database using get method */
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});
/* Post Api method (in this we save our data in database using api in postman )*/
app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});
/* Put Api method (in this we update our data in database using api in postman )*/
app.put("/", async (req, resp) => {
  let data = await dbConnect();
  let result = data.updateOne({ name: req.body.name }, { $set: req.body });

  resp.send({ result: "updated" });
});
/* dalete Api method (in this we delete our data in database using api in postman )*/
app.delete("/", async (req, resp) => {
  let data = await dbConnect();
  let result = data.deleteOne({ name: req.body.name });
  resp.send({ result: "deleted" });
});
app.listen(4500);
