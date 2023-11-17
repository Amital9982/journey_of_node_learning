// console.log(process.argv[3]);

// fs.writeFileSync(input[2], input[3]);
const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "files");
// console.log(dirpath);
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirpath + "/hello" + i + ".txt", "a simple text file");
// }
fs.readdir(dirpath, (err, files) => {
  files.forEach((item) => {
    console.log(item);
  });
});
