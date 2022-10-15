const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let newArr = Array.from(arr);

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "--discard-next") {
      newArr[newArr.indexOf("--discard-next") + 1]
        ? newArr.splice(newArr.indexOf("--discard-next"), 2)
        : newArr.splice(newArr.indexOf("--discard-next"), 1);
    } else if (arr[i] === "--discard-prev") {
      newArr[newArr.indexOf("--discard-prev") - 1]
        ? newArr.splice(newArr.indexOf("--discard-prev") - 1, 2)
        : newArr.splice(newArr.indexOf("--discard-prev"), 1);
    } else if (arr[i] === "--double-next") {
      newArr[newArr.indexOf("--double-next") + 1]
        ? newArr.splice(
            newArr.indexOf("--double-next"),
            1,
            newArr[newArr.indexOf("--double-next") + 1]
          )
        : newArr.splice(newArr.indexOf("--double-next"), 1);
    } else if (arr[i] === "--double-prev") {
      newArr[newArr.indexOf("--double-prev") - 1]
        ? newArr.splice(
            newArr.indexOf("--double-prev"),
            1,
            newArr[newArr.indexOf("--double-prev") - 1]
          )
        : newArr.splice(newArr.indexOf("--double-prev"), 1);
    }
  }
  console.log(arr);
  return newArr;
}

transform(arr)

module.exports = {
  transform,
};
