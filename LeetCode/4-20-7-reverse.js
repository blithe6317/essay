/**
    给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

    输入: 123
    输出: 321

    输入: -123
    输出: -321

    输入: 120
    输出: 21

    假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let f = x < 0;

  let str = Math.abs(x).toString().split("").reverse().join("");
  let num = f ? 0 - parseInt(str) : parseInt(str);
  if (num < -2147483648 || num > 2147483647) return 0;
  return num;
};

var reverse = function (x) {
  let f = x < 0;

  return num;
};
