// 指定の文字で終わっているか確認します
// ES6で導入されたendsWithは使ってはいけない

/**
 * @param {String} str
 * @param {String} target
 */
function confirmEnding(str, target) {
  const len = str.length;
  return str.substring(len - target.length, len) === target;
}

module.exports = confirmEnding;
