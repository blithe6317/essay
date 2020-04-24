/**
    在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

    输入: [7,5,6,4]
    输出: 5

    0 <= 数组长度 <= 50000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        result++;
      }
    }
  }

  return result;
};

var reversePairs1 = function (nums) {
  let result = 0;
  let arr = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let a = nums[i];
    if (arr.length === 0) {
      arr[0] = a;
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (a > arr[j]) {
          result += arr.length - j;
          arr.splice(j, 0, a);
          break;
        }
        if (j === arr.length - 1 && a <= arr[j]) {
          arr.push(a);
          break;
        }
      }
    }
  }
  return result;
};
