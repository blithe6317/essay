/**
    给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

    示例: 

    输入: s = 7, nums = [2,3,1,2,4,3]
    输出: 2
    解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
    进阶:

    如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  if (nums.length === 0) return 0;
  let l = 0;
  let r = 0;
  let count = nums[l];
  let min = Infinity;
  while (l <= r && r < nums.length) {
    if (count < s) {
      r++;
      count += nums[r];
    } else {
      min = Math.min(r - l + 1, min);
      count -= nums[l];
      l++;
    }
  }
  if (min === Infinity) {
    return 0;
  }
  return min;
};
