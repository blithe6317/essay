/**
（这是一个 交互式问题 ）
给你一个 山脉数组 mountainArr，请你返回能够使得 mountainArr.get(index) 等于 target 最小 的下标 index 值。
如果不存在这样的下标 index，就请返回 -1。

何为山脉数组？如果数组 A 是一个山脉数组的话，那它满足如下条件：
首先，A.length >= 3
其次，在 0 < i < A.length - 1 条件下，存在 i 使得：
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]
 
你将 不能直接访问该山脉数组，必须通过 MountainArray 接口来获取数据：
MountainArray.get(k) - 会返回数组中索引为k 的元素（下标从 0 开始）
MountainArray.length() - 会返回该数组的长度
 
注意：
对 MountainArray.get 发起超过 100 次调用的提交将被视为错误答案。此外，任何试图规避判题系统的解决方案都将会导致比赛资格被取消。
为了帮助大家更好地理解交互式问题，我们准备了一个样例 “答案”：https://leetcode-cn.com/playground/RKhe3ave，请注意这 不是一个正确答案。

示例 1：

输入：array = [1,2,3,4,5,3,1], target = 3
输出：2
解释：3 在数组中出现了两次，下标分别为 2 和 5，我们返回最小的下标 2。

示例 2：

输入：array = [0,1,2,4,2,1], target = 3
输出：-1
解释：3 在数组中没有出现，返回 -1。
 

提示：

3 <= mountain_arr.length() <= 10000
0 <= target <= 10^9
0 <= mountain_arr.get(index) <= 10^9
 */

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */

function MountainArray(array) {
  this.get = function (index) {
    return array[index];
  };

  this.length = function () {
    return array.length;
  };
}
let nums = [0, 1, 2, 4, 2, 1];
let m = new MountainArray(nums);
var findInMountainArray = function (target, mountainArr) {
  let { index, value } = getMiddle(mountainArr);
  let len = mountainArr.length();
  if (target === value) return index;
  let l = findTarget(target, mountainArr, 0, index);
  let r = findTarget(target, mountainArr, index, len - 1);
  if (l >= 0) return l;
  return r;
};

var findTarget = function (target, mountainArr, left, right, max) {
  let l = left;
  let r = right;
  while (l <= r - 1) {
    let middle = Math.ceil((l + r) / 2);
    let m = mountainArr.get(middle);
    let lv = mountainArr.get(l);
    let rv = mountainArr.get(r);
    if (target === lv) {
      return l;
    }
    if (target === rv) {
      return r;
    }
    if (target === m) {
      return middle;
    }
    if (l === r - 1) return -1;
    if (target < m) {
      r = middle;
    } else {
      l = middle;
    }
  }
  return -1;
};

var getMiddle = function (mountainArr) {
  let len = mountainArr.length();
  let left = 0;
  let right = len - 1;

  while (left < right) {
    let middle = Math.ceil((left + right) / 2);
    let m = mountainArr.get(middle);
    let l = mountainArr.get(middle - 1);
    let r = mountainArr.get(middle + 1);
    if (m > l && m > r) {
      return { index: middle, value: m };
    } else if (m > l && m < r) {
      left = middle;
    } else if (l > m && m > r) {
      right = middle;
    }
  }
};
