/**
    给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

    示例 1:

    输入: [2,3,-2,4]
    输出: 6
    解释: 子数组 [2,3] 有最大乘积 6。
    示例 2:

    输入: [-2,0,-1]
    输出: 0
    解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    max = Math.max(max, sum);
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] !== undefined) {
        sum *= nums[j];
      }
      max = Math.max(max, sum);
    }
    max = Math.max(max, sum);
  }
  return max;
};

var maxProduct1 = function (nums) {
  let res = nums[0];
  let preMax = nums[0];
  let preMin = nums[0];
  let temp1 = 0,
    temp2 = 0;
  for (let i = 1; i < nums.length; i++) {
    temp1 = preMax * nums[i];
    temp2 = preMin * nums[i];

    preMin = Math.min(temp1, temp2, nums[i]);
    preMax = Math.max(temp1, temp2, nums[i]);
    res = Math.max(preMax, res);
  }

  return res;
};
