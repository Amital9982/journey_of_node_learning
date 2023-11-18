const express = require("express");
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
  let data = Product(req.body);
  let result = await data.save();
  console.log(req.body);
  resp.send(result);
});

app.listen(4500);
