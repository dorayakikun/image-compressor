const fs = require("fs");
const PNG = require("pngjs").PNG;
const optimize = require("../../pkg/image_compressor").optimize;

const img1 = fs
  .createReadStream("img1.png")
  .pipe(new PNG())
  .on("parsed", function compress(v) {
    console.log(v);
    optimize(img1.data);
  });
