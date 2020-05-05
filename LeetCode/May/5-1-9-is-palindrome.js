/**
    判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

    输入: 121
    输出: true

    输入: -121
    输出: false
    解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

    输入: 10
    输出: false
    解释: 从右向左读, 为 01 。因此它不是一个回文数。

    你能不将整数转为字符串来解决这个问题吗？
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x === 0) return true;
  let arr = [];
  let xNum = x;
  let bit = 16;
  while (bit >= 0) {
    let n = Math.pow(10, bit);

    if (xNum >= n) {
      arr.push(Math.floor(xNum / n));
      xNum = xNum % n;
    } else if (arr.length > 0) {
      arr.push(0);
    }

    bit--;
  }
  let num = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    num += arr[i] * Math.pow(10, i);
  }
  return num === x;
};
var isPalindrome2 = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let xNum = x;
  let num = 0;
  let maxBit = 0;

  while (xNum >= 10) {
    xNum = Math.floor(xNum / 10);
    maxBit++;
  }
  let bit = maxBit;
  xNum = x;
  while (maxBit >= 0) {
    let n = Math.pow(10, maxBit);
    let rn = Math.pow(10, bit - maxBit);
    num += Math.floor(xNum / n) * rn;
    xNum = xNum % n;
    maxBit--;
  }

  return num === x;
};
