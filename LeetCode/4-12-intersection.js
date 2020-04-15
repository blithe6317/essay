/**
    给定两条线段（表示为起点start = {X1, Y1}和终点end = {X2, Y2}），如果它们有交点，请计算其交点，没有交点则返回空值。

    要求浮点型误差不超过10^-6。若有多个交点（线段重叠）则返回 X 值最小的点，X 坐标相同则返回 Y 值最小的点。

    输入：
    line1 = {0, 0}, {1, 0}
    line2 = {1, 1}, {0, -1}
    输出： {0.5, 0}

    输入：
    line1 = {0, 0}, {3, 3}
    line2 = {1, 1}, {2, 2}
    输出： {1, 1}
 */

/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function (start1, end1, start2, end2) {
  const linear = (start, end) => {
    if (start[0] === end[0]) {
      return [null, null];
    } else if (start[1] === end[1]) {
      return [0, start[1]];
    } else {
      let k = (end[1] - start[1]) / (end[0] - start[0]);
      let b = start[1] - k * start[0];
      return [k, b];
    }
  };

  let X1 = [start1[0], end1[0]];
  let Y1 = [start1[1], end1[1]];
  let X2 = [start2[0], end2[0]];
  let Y2 = [start2[1], end2[1]];

  if (start1[0] > end1[0]) {
    X1 = [end1[0], start1[0]];
  }
  if (start1[1] > end1[1]) {
    Y1 = [end1[1], start1[1]];
  }
  if (start2[0] > end2[0]) {
    X2 = [end2[0], start2[0]];
  }
  if (start2[1] > end2[1]) {
    Y2 = [end2[1], start2[1]];
  }

  let lowX = Math.max(X1[0], X2[0]);
  let lowY = Math.max(Y1[0], Y2[0]);

  let highX = Math.min(X1[1], X2[1]);
  let highY = Math.min(Y1[1], Y2[1]);
  if (lowX > highX || lowY > highY) return [];

  let [k1, b1] = linear(start1, end1);
  let [k2, b2] = linear(start2, end2);

  if (k1 === null && k2 === null) return [start1[0], lowY];
  if (k1 === null && k2 !== null) return [start1[0], start1[0] * k2 + b2];
  if (k1 !== null && k2 === null) return [start2[0], start2[0] * k1 + b1];

  if (k1 === k2) {
    if (b1 === b2) {
      return [lowX, lowX * k1 + b1];
    } else {
      return [];
    }
  }

  let x = (b2 - b1) / (k1 - k2);
  if (x < lowX || x > highX) return [];
  let y = ((b2 - b1) / (k1 - k2)) * k1 + b1;
  if (y < lowY || y > highY) return [];
  return [x, y];
};
intersection([0, 0], [0, 1], [1, 0], [1, 1]);
