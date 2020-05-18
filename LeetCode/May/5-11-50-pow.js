/**
    实现 pow(x, n) ，即计算 x 的 n 次幂函数。

    示例 1:

    输入: 2.00000, 10
    输出: 1024.00000
    示例 2:

    输入: 2.10000, 3
    输出: 9.26100
    示例 3:

    输入: 2.00000, -2
    输出: 0.25000
    解释: 2-2 = 1/22 = 1/4 = 0.25
    说明:

    -100.0 < x < 100.0
    n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  return Math.pow(x, n);
};
var myPow1 = function (x, n) {
  return x ** n;
};

var quickMul = function (x, n) {
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return x;
  }

  let j = Math.floor(n / 2);
  let jq = quickMul(x, j);

  if (n % 2 === 0) {
    return jq * jq;
  } else {
    return jq * jq * x;
  }
};

var myPow2 = function (x, n) {
  if (n < 0) {
    return quickMul(1 / x, -n);
  }
  return quickMul(x, n);
};