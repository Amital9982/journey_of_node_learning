const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/ecom");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveindb = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "m670",
    price: 100840,
    brand: "oppo",
    category: "mobiles",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDb = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = await ProductsModel.updateOne(
    { name: "U10" },
    { $set: { price: 800 } }
  );
  console.log(data);
};
updateInDb();
