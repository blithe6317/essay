/**
    在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

    示例:
    输入: 
    1 0 1 0 0
    1 0 1 1 1
    1 1 1 1 1
    1 0 0 1 0

    输出: 4
 */

let m = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
let m2 = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
];
let m3 = [
  [1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let max = 0;
  let len = matrix.length;

  for (let i = 0; i < len - max; i++) {
    let row = matrix[i].length;
    for (let j = 0; j < row - max; j++) {
      let num = matrix[i][j];
      if (num == 1) {
        let w = i + max;
        let h = j + max;
        let flag = true;
        while (flag && w <= len && h <= row) {
          A: for (let m = i; m <= w; m++) {
            for (let n = j; n <= h; n++) {
              if (!matrix[m] || matrix[m][n] == 0) {
                flag = false;
                break A;
              }
            }
          }
          w++;
          h++;
        }

        max = Math.max(max, w - 1 - i);
      }
    }
  }

  return Math.pow(max, 2);
};

var maximalSquare2 = function (matrix) {
  let max = 0;
  let len = matrix.length;
  for (let i = 0; i < len; i++) {
    let row = matrix[i].length;
    for (let j = 0; j < row; j++) {
      let cur = matrix[i][j];
      if (i - 1 >= 0 && j - 1 >= 0) {
        let top = matrix[i - 1][j - 1];
        let left = matrix[i][j - 1];
        let right = matrix[i - 1][j];

        if (top > 0 && left > 0 && right > 0 && cur > 0) {
          if (top == left && left == right) {
            cur = +top + 1;
            matrix[i][j] = cur;
          } else {
            let a = Math.min(top, left, right) + 1;
            cur = a;
            matrix[i][j] = a;
          }
        }
      }

      if (cur > 0) {
        max = Math.max(max, cur);
      }
    }
  }
  return Math.pow(max, 2);
};
