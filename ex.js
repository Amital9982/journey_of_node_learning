const express = require("express");
const path = require("path");
const app = express();
// app.get("", (req, res) => {
//   res.send("<h1>hello this is home page</h1>");
// });
// app.get("/about", (req, res) => {
//   res.send("hello this is about page");
// });
// app.get("/contact", (req, res) => {
//   res.send("hello this is contact page");
// });
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");
// app.use(express.static(publicPath));
app.get("", (_, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});
app.get("/about", (_, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});

app.get("/profile", (_, resp) => {
  const user = {
    name: "Arpit mittal",
  };
  resp.render("profile", { user });
});

app.listen(4500);
