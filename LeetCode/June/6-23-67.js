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
  let la = a.length - 1;
  let lb = b.length - 1;

  let l = Math.max(la, lb);

  let c = 0;
  while (la >= 0 || lb >= 0) {
    let sa = a[la] === undefined ? 0 : parseInt(a[la]);
    let sb = b[lb] === undefined ? 0 : parseInt(b[lb]);
    let v = 0;
    v = sa + sb + c;
    if (c > 0) {
      c--;
    }
    if (v >= 2) {
      v = v % 2;
      c++;
    }
    str = v + str;
    la--;
    lb--;
  }
  if (c > 0) {
    str = c + str;
  }
  return str;
};
