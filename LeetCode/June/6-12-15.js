var nums = [
  -6,
  14,
  -11,
  7,
  -5,
  -8,
  12,
  -13,
  -3,
  -14,
  7,
  0,
  -7,
  -15,
  -5,
  -9,
  -13,
  -7,
  -5,
  9,
  8,
  -13,
  -6,
  -8,
  -12,
  7,
  -10,
  11,
  8,
  -14,
  12,
  9,
  -15,
  -14,
  1,
  -5,
  -7,
  -10,
  -10,
  5,
  -9,
  12,
  12,
  -1,
  12,
  14,
  -2,
  -15,
  -8,
  0,
  9,
  7,
  2,
  10,
  14,
  -3,
  2,
  11,
  -6,
  -13,
  12,
  13,
  11,
  5,
  14,
  -11,
  7,
  14,
  -6,
  12,
  -4,
  -7,
  9,
  -7,
  -1,
  -1,
  -8,
  4,
  -9,
  -9,
  -11,
  -15,
  5,
  6,
  10,
  4,
  11,
  -10,
  -8,
  12,
  -8,
  -10,
  10,
  11,
  2,
  9,
  -15,
  -14,
  0,
  -13,
  14,
  11,
  -5,
  0,
  -11,
  1,
  6,
  -12,
];

/**
    给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
    注意：答案中不可以包含重复的三元组。

    示例：
    给定数组 nums = [-1, 0, 1, 2, -1, -4]，
    满足要求的三元组集合为：
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  let set = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] > 0) break;
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      for (let k = j + 1; k < nums.length; k++) {
        if (
          (nums[i] + nums[j] > 0 && nums[k] > 0) ||
          set.has("" + nums[i] + "_" + nums[j] + "_" + nums[k])
        ) {
          break;
        }
        if (k > j + 1 && nums[k] == nums[k - 1]) continue;
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
          set.add("" + nums[i] + "_" + nums[j] + "_" + nums[k]);
          break;
        }
      }
    }
  }
  return result;
};
const test = () => {
  console.time();
  threeSum(nums);
  console.timeEnd();
};
test();

var threeSum1 = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let n = nums[i];
    if (n > 0) break;
    if (i > 0 && n == nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let nl = nums[left];
      let nr = nums[right];
      if (n + nl + nr === 0) {
        result.push([n, nl, nr]);
        while (left < right && nums[left] === nl) left++;
        while (left < right && nums[right] === nr) right++;
      } else if (n + nl + nr < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
const test = () => {
  console.time();

  console.timeEnd();
};
test();
