/**
    给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
    求在该柱状图中，能够勾勒出来的矩形的最大面积。

    以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为[2, 1, 5, 6, 2, 3]。

    图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

    示例:

    输入: [2, 1, 5, 6, 2, 3]
    输出: 10
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    let cur = heights[i];
    let left = (right = i);
    while (
      (heights[left - 1] >= cur && left > 0) ||
      (heights[right + 1] >= cur && right < heights.length - 1)
    ) {
      if (heights[left - 1] >= cur && left > 0) {
        left--;
      }
      if (heights[right + 1] >= cur && right < heights.length - 1) {
        right++;
      }
    }

    max = Math.max(max, (right - left + 1) * cur);
  }
  return max;
};

var largestRectangleArea1 = function (heights) {
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    let cur = heights[i];
  }
  return max;
};