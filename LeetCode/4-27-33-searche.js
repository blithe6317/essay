/**
    假设按照升序排序的数组在预先未知的某个点上进行了旋转。
    ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
    搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
    你可以假设数组中不存在重复的元素。
    你的算法时间复杂度必须是 O(log n) 级别。

    输入: nums = [4,5,6,7,0,1,2], target = 0
    输出: 4

    输入: nums = [4,5,6,7,0,1,2], target = 3
    输出: -1
 */

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums || nums.length === 0) return -1;
  let len = nums.length;

  let start = 0;
  let end = len - 1;

  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > nums[start]) {
      if (target < nums[mid] && target >= nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[len - 1]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
