// 各サブ配列内での最大数で構成される配列を返します

// ex. 下記のような引数が渡った場合
// [
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ];
// 各サブ配列内の最大数で構成された下記の配列が返却されます
// [27, 5, 39, 1001];

/**
 * @param {Array} str
 */
function largestOfFour(arr) {
  const arrayMaxNumbers = arr.map((el) => {
    return Math.max(...el);
  });
  return arrayMaxNumbers;
}

module.exports = largestOfFour;
