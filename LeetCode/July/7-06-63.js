/**
    一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
    现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

    网格中的障碍物和空位置分别用 1 和 0 来表示。
    说明：m 和 n 的值均不超过 100。
    示例 1:

    输入:
    [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]
    输出: 2
    解释:
    3x3 网格的正中间有一个障碍物。
    从左上角到右下角一共有 2 条不同的路径：
    1. 向右 -> 向右 -> 向下 -> 向下
    2. 向下 -> 向下 -> 向右 -> 向右
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles1 = function (obstacleGrid) {
  let li = obstacleGrid.length;
  let lj = obstacleGrid[0].length;
  let count = 0;
  let dfs = function (i, j) {
    let a = obstacleGrid[i];
    let b = a[j];
    if (b) {
      return;
    }
    if (i === li - 1 && j === lj - 1) {
      count++;
      return;
    }
    if (i < li - 1 && j < lj - 1) {
      dfs(i, j + 1);
      dfs(i + 1, j);
    } else if (i < li - 1 && j === lj - 1) {
      dfs(i + 1, j);
    } else if (i === li - 1 && j < lj - 1) {
      dfs(i, j + 1);
    }
  };
  dfs(0, 0);
  return count;
};

var uniquePathsWithObstacles = function (obstacleGrid) {
  let li = obstacleGrid.length;
  let lj = obstacleGrid[0].length;
  let count = 0;
  for (let i = 0; i < li; i++) {
    let a = obstacleGrid[i];
    for (let j = 0; j < lj; j++) {
      let b = a[j];
      if (b === 1) {
      }
    }
  }
  return count;
};
