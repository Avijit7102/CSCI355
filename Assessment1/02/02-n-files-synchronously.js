const fs = require("fs");
const n = 5; // put n = 100 if you want to write n files 01-output.txt up to 99-output.txt to a subdirectory output
const output_dir = "./output";
const data = "Data-2";

writeSync(1);

function writeSync(i) {
  let file = `${i.toString().padStart(2, "0")}-output.txt`;
  let path = `${output_dir}/${file}`;
  fs.writeFile(path, data, (err) => after_write(i, file));
}

function after_write(i, file) {
  console.log(`Finished Writing: ${file}`);
  if (i >= n) {
    console.log("Writing Complete.");
  } else {
    writeSync(i + 1);
  }
}
