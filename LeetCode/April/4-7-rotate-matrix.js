/**
 * 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

   不占用额外内存空间能否做到？
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const matrix2 = [
  [1, 2],
  [3, 4],
];
// 3 1 4 2

// 1 2 3 4
// 4 1 2 3
// 3 4 1 2
// 2 3 4 1

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 7 4 1 8 5 2 9 6 3

// 1 2 3 4 5 6 7 8 9
// 2 3 4 5 6 7 8 9 1
// 3 4 5 6 7 8 9 1 2
// 4 5 6 7 8 9 1 2 3
// 5 6 7 8 9 1 2 3 4
// 6 7 8 9 1 2 3 4 5
// 7 8 9 4 5 6 1 2 3
// 8 9 1 2 3 4 5 6 7
// 9 1 2 3 4 5 6 7 8

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

var rotate = function (matrix) {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let a = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = a;
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < parseInt(len / 2); j++) {
      let a = matrix[i][j];
      matrix[i][j] = matrix[i][len - j - 1];
      matrix[i][len - j - 1] = a;
    }
  }
  console.log("matrix:", matrix);
};
