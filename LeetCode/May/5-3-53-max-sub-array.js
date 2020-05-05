/**
    给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

    输入: [-2,1,-3,4,-1,2,1,-5,4],
    输出: 6
    解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

    进阶:
    如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums || nums.length === 0) return null;
  let len = nums.length;
  let cur_sum, max_sum;
  cur_sum = max_sum = nums[0];

  for (let i = 1; i < len; i++) {
    cur_sum = Math.max(nums[i], cur_sum + nums[i]);
    max_sum = Math.max(cur_sum, max_sum);
  }
  return max_sum;
};

var maxSubArray2 = function (nums) {
  if (!nums || nums.length === 0) return null;
  let len = nums.length;

  for (let i = 1; i < len; i++) {
    let per = nums[i - 1];
    if (per > 0) {
      nums[i] += per;
    }
  }
  return Math.max.apply(null, nums);
};
