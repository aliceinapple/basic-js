const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};

  domains.forEach((item) => {
    let arr = item.split(".").reverse();
    let key = "";

    arr.forEach((item) => {
      key += "." + item;
      obj.hasOwnProperty(key) ? (obj[key] += 1) : (obj[key] = 1);
    });
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
