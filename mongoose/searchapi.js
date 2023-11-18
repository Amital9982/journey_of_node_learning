const express = require("express");
require("./config");
const app = express();
const Product = require("./product");
app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  console.log(req.params.key);
  let data = await Product.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
    ],
  });
  resp.send(data);
});

app.listen(4500);
