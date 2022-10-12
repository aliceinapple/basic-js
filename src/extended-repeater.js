const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator;

  str = String(str);
  options["addition"] !== undefined
    ? (addition = String(options["addition"]))
    : (addition = "");

  options["repeatTimes"]
    ? (repeatTimes = options["repeatTimes"])
    : (repeatTimes = 1);

  options["additionRepeatTimes"]
    ? (additionRepeatTimes = options["additionRepeatTimes"])
    : (additionRepeatTimes = 1);

  options["separator"] ? (separator = options["separator"]) : (separator = "+");
  options["additionSeparator"]
    ? (additionSeparator = options["additionSeparator"])
    : (additionSeparator = "|");

  let arr = [];
  let resultArr = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    arr.push(addition);
  }
  let additionStr = arr.join(additionSeparator);
  for (let i = 0; i < repeatTimes; i++) {
    resultArr.push(str + additionStr);
  }
  return resultArr.join(separator);
}

module.exports = {
  repeater,
};
