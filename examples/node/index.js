const fs = require("fs");
const optimize = require("../../pkg/image_compressor").optimize;

const buf = fs.readFileSync("./img1.png");
try {
  fs.writeFileSync("img1.optimized.png", optimize(buf));
} catch (error) {
  console.log("failed optimize: ", error);
}
