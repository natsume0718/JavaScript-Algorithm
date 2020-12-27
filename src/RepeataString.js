// 指定の文字を指定回数繰り返します
// ES6で導入されたrepeatは使用してはいけません

/**
 * @param {String} str
 * @param {int} num
 */
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  }
  let res = "";
  for (let i = 0; i < num; i++) {
    res += str;
  }
  return res;
}
module.exports = repeatStringNumTimes;
