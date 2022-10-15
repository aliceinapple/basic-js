const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!Date.parse(date)) {
    throw Error("Invalid date!");
  }
  try {
    date.getUTCSeconds();
  } catch {
    throw Error("Invalid date!");
  }
  let winter = [11, 0, 1];
  let spring = [2, 3, 4];
  let summer = [5, 6, 7];
  let autumn = [8, 9, 10];
  if (winter.includes(date.getMonth())) {
    return "winter";
  } else if (spring.includes(date.getMonth())) {
    return "spring";
  } else if (summer.includes(date.getMonth())) {
    return "summer";
  } else if (autumn.includes(date.getMonth())) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
