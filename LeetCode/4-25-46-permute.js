/**
    给定一个 没有重复 数字的序列，返回其所有可能的全排列。
    输入: [1,2,3]
    输出:
    [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
    ]

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let len = nums.length;
  let result = [];
  if (len === 0) return result;

  let path = new Set();

  dfs(nums, len, 0, path, result);
  return result;
};

var dfs = function (nums, len, depth, path, result) {
  if (len === depth) {
    result.push(Array.from(path));
  }

  for (let i = 0; i < len; i++) {
    if (!path.has(nums[i])) {
      path.add(nums[i]);
      dfs(nums, len, depth + 1, path, result);
      path.delete(nums[i]);
    }
  }
};
