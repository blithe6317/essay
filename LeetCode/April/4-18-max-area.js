/**
    给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
    说明：你不能倾斜容器，且 n 的值至少为 2。

    输入：[1,8,6,2,5,4,8,3,7]
    输出：49
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxArea = function (arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let a1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let a2 = arr[j];
      let dv = j - i;

      max = Math.max(max, dv * Math.min(a1, a2));
    }
  }

  return max;
};

var maxArea1 = function (arr) {
  let max = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(arr[left], arr[right]));
    if (arr[left] > arr[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};
