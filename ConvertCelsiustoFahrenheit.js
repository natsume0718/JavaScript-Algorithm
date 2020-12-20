// 摂氏(℃)を華氏(℉)に変換する
// 摂氏から華氏に変換するアルゴリズムは、摂氏時間の温度に9/5し32をプラスしたもの。

/**
 * @param {int} celsius
 */
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

module.exports = convertToF;
