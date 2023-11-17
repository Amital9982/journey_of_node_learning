// const { json } = require("body-parser");
// const http = require("http");
// const data = require("./data");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "applicationjson" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(4500);
// console.log("arpit here");

// const express = require("express");
// const app = express();
// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("please provide age");
//   } else {
//     next();
//   }
// };
// app.use(reqFilter);
// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });
// app.listen(4500);

// dbConnect().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });
// console.log(dbConnect());
const dbConnect = require("./mongodb");
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};
main();
