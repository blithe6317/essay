/**
给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
返回一对观光景点能取得的最高分。

示例：

输入：[8,1,5,2,6]
输出：11
解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11

提示：

2 <= A.length <= 50000
1 <= A[i] <= 1000
 */

/**
 * @param {number[]} A
 * @return {number}
 */

let A = new Array(50000).map((i) => parseInt(Math.random() * 1000));
var maxScoreSightseeingPair1 = function (A) {
  let max = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let a = A[i];
    let b = 0;
    for (let j = i + 1; j < A.length; j++) {
      if (b < A[j] && A[j] >= i - j) {
        b = A[j];
        max = Math.max(max, a + b + i - j);
      }
    }
  }
  return max;
};

var maxScoreSightseeingPair = function (A) {
  let max = 0;
  let i = 0;
  let j = 1;

  while (j < A.length) {
    let v = A[i] + i - j;
    max = Math.max(max, v + A[j]);
    if (A[j] >= v) {
      i = j;
    }
    j++;
  }

  return max;
};

let test = () => {
  console.time();
  let a = maxScoreSightseeingPair(A);
  console.timeEnd();
  console.log(a);
};
