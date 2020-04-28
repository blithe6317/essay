/**
    给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
    岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
    此外，你可以假设该网格的四条边均被水包围。

    输入:
    11110
    11010
    11000
    00000
    输出: 1

    输入:
    11000
    11000
    00100
    00011
    输出: 3
    解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 */
let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

let grid1 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
let grid2 = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
];
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length <= 0) return 0;
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    let item = grid[i];
    for (let j = 0; j < item.length; j++) {
      if (item[j] == 1) {
        result++;
        dfs(grid, i, j);
      }
    }
  }

  return result;
};

function dfs(arr, i, j) {
  if (i < 0 || i >= arr.length || j < 0 || j >= arr[i].length || arr[i][j] == 0)
    return;
  arr[i][j] = "0";
  dfs(arr, i, j + 1);
  dfs(arr, i, j - 1);
  dfs(arr, i + 1, j);
  dfs(arr, i - 1, j);
}

let grid = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
];

let s1 = "acb",
  n1 = 4,
  s2 = "ab",
  n2 = 2;

var getMaxRepetitions = function (s1, n1, s2, n2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");

  let index = 0;
  let count = 0;
  debugger;
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[index]) {
        index++;
      }
      if (index === arr2.length) {
        index = 0;
        count++;
      }
    }
  }
  return parseInt(count / n2);
};
