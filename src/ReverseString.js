// 与えられた文字列を逆にする
// 文字列を配列化し、反転、文字列化することで実現する

/**
 * @param {any} str
 */
function reverseString(str) {
  return Array.from(str).reverse().join("");
}
module.exports = reverseString;
