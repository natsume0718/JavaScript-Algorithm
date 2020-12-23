// 指定された文の最長の単語の長さを返します。

/**
 * @param {string} str
 */
function findLongestWordLength(str) {
  // 配列に分解
  const spiltedArray = str.split(" ");
  // 分解した単語ごとに長さの配列化を展開して、最長を取得
  const longest = Math.max(...spiltedArray.map((el) => el.length));
  return longest;
}

module.exports = findLongestWordLength;
