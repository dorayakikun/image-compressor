const fs = require("fs");
const optimize = require("../../pkg/image_compressor").optimize;

const buf = fs.readFileSync("./img1.png");
try {
  optimize(Uint8Array.from(buf));
} catch (error) {
  console.log("failed optimize: ", error);
}
