/**
    给你两个二进制字符串，返回它们的和（用二进制表示）。
    输入为 非空 字符串且只包含数字 1 和 0。

    示例 1:

    输入: a = "11", b = "1"
    输出: "100"
    示例 2:

    输入: a = "1010", b = "1011"
    输出: "10101"
     

    提示：

    每个字符串仅由字符 '0' 或 '1' 组成。
    1 <= a.length, b.length <= 10^4
    字符串如果不是 "0" ，就都不含前导零。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let str = "";
  let aLen = a.length - 1;
  let bLen = b.length - 1;

  let x = 0;
  while (aLen >= 0 || bLen >= 0) {
    let s;
    if (a[aLen] !== undefined || b[bLen] !== undefined) {
      s =
        (a[aLen] === undefined ? 0 : parseInt(a[aLen])) +
        (b[bLen] === undefined ? 0 : parseInt(b[bLen])) +
        x;
      if (s >= 2) {
        s = s % 2;
        x = 1;
      } else {
        x = 0;
      }
    }
    str = s + str;
    aLen--;
    bLen--;
  }
  if (x > 0) {
    str = x + str;
  }
  return str;
};
