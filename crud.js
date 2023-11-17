//crud operation on file system

const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "crud");
const filePath = `${dirpath}/apple.txt`;

// **create file using  writeFileSync module **
// fs.writeFileSync(filePath, "hey this comes from apple file");

// **Read file using  readFile module **
// fs.readFile(filePath, "utf8", (err, data) => {
//   console.log(data);
// });
// **update  file using  append module **
// fs.appendFile(
//   filePath,
//   "this is an updated text in the file that write after the previcous data ",
//   (err) => {
//     if (!err) console.log("file is updated");
//   }
// );

//**rename file using rename module**
// fs.rename(filePath, `${dirpath}/fruit.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });

//**delete file using unlinksync module**
// fs.unlinkSync(`${dirpath}/fruit.txt`);
