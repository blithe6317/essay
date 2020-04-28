/**
    一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

    输入：nums = [4,1,4,6]
    输出：[1,6] 或 [6,1]

    输入：nums = [1,2,10,4,1,4,3,3]
    输出：[2,10] 或 [10,2]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let set1 = new Set();
  let set2 = new Set();
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (set1.has(n)) {
      set2.delete(n);
    } else {
      set1.add(n);
      set2.add(n);
    }
  }

  return Array.from(set2);
};
