const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  let result = await db.insertOne({
    name: "note 5",
    brand: "vivo",
    price: 320,
    category: "mobiles",
  });
  console.log(result);
};
insert();
