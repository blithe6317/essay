/**
 硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)

 输入: n = 5
 输出：2
 解释: 有两种方式可以凑成总金额:
 5=5
 5=1+1+1+1+1

 输入: n = 10
 输出：4
 解释: 有四种方式可以凑成总金额:
 10=10
 10=5+5
 10=5+1+1+1+1+1
 10=1+1+1+1+1+1+1+1+1+1
 */

/**
 * @param {number} n
 * @return {number}
 */
let arr = [25, 10, 5, 1];
var waysToChange = function (n) {
  if (n < 5) return 1;
  if (n < 10) return 2;
  let coins = [1, 5, 10, 25];
  let arr = new Array(n + 1).fill(1);
  for (let i = 0; i < 4; i++) {
    let coin = coins[i];
    for (let j = coin; j <= n; j++) {
      arr[j] = (arr[j] + arr[j - coin]) % 1000000007;
    }
  }
  return arr[n];
};
