/**
    给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

    示例 1:

    输入: [1,3,4,2,2]
    输出: 2
    示例 2:

    输入: [3,1,3,4,2]
    输出: 3
    说明：

    不能更改原数组（假设数组是只读的）。
    只能使用额外的 O(1) 的空间。
    时间复杂度小于 O(n2) 。
    数组中只有一个重复的数字，但它可能不止重复出现一次。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    } else {
      set.add(nums[i]);
    }
  }
};

var findDuplicate1 = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let midIndex = (left + right) >> 1;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= midIndex) count++;
    }

    if (count > midIndex) {
      right = midIndex;
    } else {
      left = midIndex + 1;
    }
  }
  return right;
};
