const { splitArrayIntoChunks } = require("./array_split_2_chunk_size");

const test = () => {
  var array = ["a", "b", "c", "d", "d", "e", "f", "g"];
  var chunkSize = 3;
  var result = splitArrayIntoChunks(array, chunkSize);
  console.log(result);
}

test();