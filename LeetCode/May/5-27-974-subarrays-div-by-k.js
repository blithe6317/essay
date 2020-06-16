/**
    给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。

    示例：

    输入：A = [4,5,0,-2,-3,1], K = 5
    输出：7
    解释：
    有 7 个子数组满足其元素之和可被 K = 5 整除：
    [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

    提示：

    1 <= A.length <= 30000
    -10000 <= A[i] <= 10000
    2 <= K <= 10000
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = i; j < A.length; j++) {
      sum += A[j];
      if (sum % 5 === 0) {
        count++;
      }
    }
  }
  return count;
};

var subarraysDivByK1 = (A, K) => {
  let map = { 0: 1 };
  let preSum = 0;
  let count = 0;
  debugger;
  for (let i = 0; i < A.length; i++) {
    preSum = (preSum + A[i]) % K;
    if (preSum < 0) {
      preSum += K;
    }

    if (map[preSum]) {
      count += map[preSum];
    }

    if (map[preSum]) {
      map[preSum]++;
    } else {
      map[preSum] = 1;
    }
  }
  return count;
};
