// split array into chunk size
const splitArrayIntoChunks = (array, chunkSize) =>
  array.reduce(
    (acc, current_value, index) => (
      index % chunkSize
        ? acc[acc.length - 1].push(current_value)
        : acc.push([current_value]),
      acc
    ),
    []
  );

exports.splitArrayIntoChunks = splitArrayIntoChunks;