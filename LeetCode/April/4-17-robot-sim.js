/**
    机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：

    -2：向左转 90 度
    -1：向右转 90 度
    1 <= x <= 9：向前移动 x 个单位长度
    在网格上有一些格子被视为障碍物。

    第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])

    如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。

    返回从原点到机器人的最大欧式距离的平方。

    输入: commands = [4,-1,3], obstacles = []
    输出: 25
    解释: 机器人将会到达 (3, 4)

    输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
    输出: 65
    解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处
 */

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let x = 0;
  let y = 0;
  let max = 0;
  let directions = ["r", "b", "l", "t"];
  let obstaclesSet = new Set();
  for (let i = 0; i < obstacles.length; i++) {
    obstaclesSet.add(obstacles[i] + "");
  }
  let curDIndex = 3;
  for (let i = 0; i < commands.length; i++) {
    let curD = directions[curDIndex];
    let next = commands[i];
    if (next > 0) {
      go(next, curD);
    } else {
      if (next === -1) {
        curDIndex = (curDIndex + 1) % 4;
      } else if (next === -2) {
        curDIndex = curDIndex - 1 < 0 ? 3 : curDIndex - 1;
      }
    }
  }

  function go(next, curD) {
    let i = 0;
    do {
      switch (curD) {
        case "r":
          x++;
          if (obstaclesSet.has(`${x},${y}`)) {
            x--;
          }
          break;
        case "b":
          y--;
          if (obstaclesSet.has(`${x},${y}`)) {
            y++;
          }
          break;
        case "l":
          x--;
          if (obstaclesSet.has(`${x},${y}`)) {
            x++;
          }
          break;
        case "t":
          y++;
          if (obstaclesSet.has(`${x},${y}`)) {
            y--;
          }
          break;
      }
      max = Math.max(max, Math.pow(x, 2) + Math.pow(y, 2));
      i++;
    } while (i < next);
  }

  return max;
};

var com = [1, 2, -2, 5, -1, -2, -1, 8, 3, -1, 9, 4, -2];
var ob = [
  [-57, -58],
  [-72, 91],
  [-55, 35],
  [-20, 29],
  [51, 70],
  [-61, 88],
  [-62, 99],
  [52, 17],
  [-75, -32],
  [91, -22],
  [54, 33],
  [-45, -59],
  [47, -48],
  [53, -98],
  [-91, 83],
  [81, 12],
  [-34, -90],
  [-79, -82],
  [-15, -86],
  [-24, 66],
  [-35, 35],
  [3, 31],
  [87, 93],
  [2, -19],
  [87, -93],
];

robotSim(com, ob);
