/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，
 * 它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
 * 但它不能进入方格 [35, 38]，因为3+5+3+8=19。
 * 请问该机器人能够到达多少个格子？
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  if (!k) return 1;
  var count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (formatNum(i) + formatNum(j) <= k) {
        count++;
        console.log(i + "-" + j);
      } else {
        break;
      }
    }
  }
  return count;
};

var movingCount1 = function (m, n, k) {
  const set = new Set();
  if (!k) return 1;
  var dfs = (i, j, si, sj) => {
    if (i >= m || j >= n || k < si + sj || set.has(`${i},${j}`)) return 0;
    set.add(`${i},${j}`);
    return (
      1 +
      dfs(i + 1, j, (i + 1) % 10 === 0 ? si - 8 : si + 1, sj) +
      dfs(i, j + 1, si, (j + 1) % 10 === 0 ? sj - 8 : sj + 1)
    );
  };

  return dfs(0, 0, 0, 0);
};

var movingCOunt2 = function (m, n, k) {
  const set = new Set();
};
