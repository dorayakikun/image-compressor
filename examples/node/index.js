const fs = require("fs");
const PNG = require("pngjs").PNG;
const optimize = require("../../pkg/image_compressor").optimize;

fs.createReadStream("img1.png")
  .pipe(new PNG())
  .on("parsed", function compress(data) {
    try {
      optimize(Uint8Array.from(data));
    } catch (error) {
      console.log("failed optimize PNG: ", error);
    }
  });
