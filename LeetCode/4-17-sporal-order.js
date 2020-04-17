/**
 *  输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * 
 *  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
    输出：[1,2,3,6,9,8,7,4,5]

    输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 */

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  let directions = ["r", "b", "l", "t"];
  let set = new Set();
  let i = 0,
    j = 0,
    dIndex = 0;
  let result = [];
  let len = matrix[i].length * matrix.length;
  while (result.length < len) {
    let m1 = matrix[i];
    let m2 = m1[j];
    let d = directions[dIndex];
    let str = `${i},${j}`;

    if (d === "r") {
      if (set.has(str)) {
        add_dIndex();
        j--;
        i++;
      } else {
        set.add(str);
        result.push(m2);

        if (j === m1.length - 1) {
          add_dIndex();
          i++;
        } else {
          j++;
        }
      }
    } else if (d === "b") {
      if (set.has(str)) {
        add_dIndex();
        i--;
        j--;
      } else {
        set.add(str);
        result.push(m2);

        if (i === matrix.length - 1) {
          add_dIndex();
          j--;
        } else {
          i++;
        }
      }
    } else if (d === "l") {
      if (set.has(str)) {
        add_dIndex();
        j++;
        i--;
      } else {
        set.add(str);
        result.push(m2);

        if (j === 0) {
          add_dIndex();
          i--;
        } else {
          j--;
        }
      }
    } else if (d === "t") {
      if (set.has(str)) {
        add_dIndex();
        i++;
        j++;
      } else {
        set.add(str);
        result.push(m2);

        if (i === 0) {
          add_dIndex();
          j++;
        } else {
          i--;
        }
      }
    }
  }

  function add_dIndex() {
    dIndex = (dIndex + 1) % 4;
  }

  return result;
};
spiralOrder(matrix1);
