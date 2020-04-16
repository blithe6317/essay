/**
 *  给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
    两个相邻元素间的距离为 1 。

    示例 1:
    输入:

    0 0 0
    0 1 0
    0 0 0
    输出:

    0 0 0
    0 1 0
    0 0 0

    示例 2:
    输入:

    0 0 0
    0 1 0
    1 1 1
    输出:

    0 0 0
    0 1 0
    1 2 1

    注意:

    给定矩阵的元素个数不超过 10000。
    给定矩阵中至少有一个元素是 0。
    矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var matrix1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

var matrix2 = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

var matrix = [
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1],
];

var y = [
  [0, 1, 0, 1, 2],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1],
];

var x = [
  [0, 1, 0, 1, 2],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [1, 0, 0, 0, 2],
];

var updateMatrix = function (matrix) {
  let newMatrix = [];
  let arrIJ = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        arrIJ.push([i, j]);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        newMatrix[i].push(0);
      } else {
        newMatrix[i].push(findZ([i, j], arrIJ));
      }
    }
  }
  return newMatrix;
};

var findZ = ([k, j], arrIJ) => {
  let count = Infinity;
  for (let i = 0; i < arrIJ.length; i++) {
    const item = arrIJ[i];
    var abs = Math.abs(item[0] - k) + Math.abs(item[1] - j);
    count = Math.min(count, abs);
    if (count === 1) {
      break;
    }
  }
  return count;
};

var getArrZ = (matrix) => {
  let arrIJ = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        arrIJ.push([i, j]);
      }
    }
  }
  return arrIJ;
};

var ma1 = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

var arrIJ = getArrZ(ma1);
findZ([2, 1], arrIJ);
