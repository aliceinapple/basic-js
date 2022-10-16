const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    str = str.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
      if (!letters.includes(str[i])) {
        newStr.push(str[i]);
      } else {
        if (keyIndex >= key.length) {
          keyIndex = 0;
        }
        let num = letters.indexOf(str[i]) + letters.indexOf(key[keyIndex]);
        if (num > 25) {
          num = num - 26;
        }
        newStr.push(letters[num]);
        keyIndex++;
      }
    }
    if (this.direction) {
      return newStr.join("");
    } else {
      return newStr.reverse().join("");
    }
  }
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    str = str.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
      if (!letters.includes(str[i])) {
        newStr.push(str[i]);
      } else {
        if (keyIndex >= key.length) {
          keyIndex = 0;
        }
        let num = letters.indexOf(str[i]) - letters.indexOf(key[keyIndex]);
        if (num < 0) {
          num = 26 + num;
        }
        newStr.push(letters[num]);
        keyIndex++;
      }
    }
    if (this.direction) {
      return newStr.join("");
    } else {
      return newStr.reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
