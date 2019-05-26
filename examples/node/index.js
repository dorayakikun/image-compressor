const fs = require("fs");
const optimize = require("../../pkg/image_compressor").optimize;

fs.createReadStream("img1.png").on("parsed", function handleParsed(data) {
  try {
    optimize(Uint8Array.from(data));
  } catch (error) {
    console.log("failed optimize: ", error);
  }
});
