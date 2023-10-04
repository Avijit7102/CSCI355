/*
=======================
01-n-files-asynchronously.js
=======================
Student ID:
Comment (Required):

=======================
*/
const fs = require("fs");
const n = 10; //input size 0 < n < 100
const data = "Data-1";
const output_dir = "./output";
let written = 0;

for (let i = 0; i < n; i++) {
  let file = `${i.toString().padStart(2, "0")}-output.txt`;
  let path = `${output_dir}/${file}`;

  fs.writeFile(path, data, (err) => after_write(err, file));
}

function after_write(err) {
  if (err) {
    throw err;
  }
  console.log(`Finished Writing File ${file}`);
  written++;
  if (written >= n) {
    console.log("Writing Complete");
  }
}
