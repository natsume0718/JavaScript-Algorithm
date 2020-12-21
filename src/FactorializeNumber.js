// 与えられた数値の階乗を求める
// ex. 5! = 1 * 2 * 3 * 4 * 5 = 120

/**
 * @param {int} str
 */
function factorialize(num) {
  if (num > 0) {
    return num * factorialize(--num);
  }
  return num + 1;
}

module.exports = factorialize;
