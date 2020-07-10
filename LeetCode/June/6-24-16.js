/**
    给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

    示例：

    输入：nums = [-1,2,1,-4], target = 1
    输出：2
    解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

    提示：

    3 <= nums.length <= 10^3
    -10^3 <= nums[i] <= 10^3
    -10^4 <= target <= 10^4
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];

    let j = i + 1,
      k = nums.length - 1;

    while (j < k) {
      let count = a + nums[j] + nums[k];
      if (count === target) {
        return count;
      }
      if (Math.abs(count - target) < Math.abs(result - target)) {
        result = count;
      }
      if (count > target) {
        let k0 = k - 1;
        while (j < k0 && nums[k0] === nums[k]) {
          --k0;
        }
        k = k0;
      } else {
        let j0 = j + 1;
        while (j0 < k && nums[j0] === nums[j]) {
          ++j0;
        }
        j = j0;
      }
    }
  }
  return result;
};
