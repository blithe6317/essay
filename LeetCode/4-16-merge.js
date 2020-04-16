/**
    给出一个区间的集合，请合并所有重叠的区间。

    输入: [[1,3],[2,6],[8,10],[15,18]]
    输出: [[1,6],[8,10],[15,18]]
    解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

    输入: [[1,4],[4,5]]
    输出: [[1,5]]
    解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

 */
var intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
var intervals1 = [
  [1, 4],
  [2, 3],
];
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let newArr = [];
  intervals
    .sort((a, b) => a[0] - b[0])
    .forEach((item) => {
      let len = newArr.length;
      let last = newArr[len - 1];
      let ap = apply(last, item);
      if (ap) {
        newArr.splice(len - 1, 1, ap);
      } else {
        newArr.push(item);
      }
    });
  return newArr;
};

var apply = (arr1, arr2) => {
  if (!arr1 || !arr2) {
    return arr1 || arr2;
  }
  if (arr1[1] >= arr2[0]) {
    return [arr1[0], Math.max(arr1[1], arr2[1])];
  }
  return false;
};

var arr = [4, 2, 6, 1, 5, 3];
let arr1 = [...arr];
arr1.forEach((t, i) => {
  console.log("t:", t);
  console.log("i:", i);
  if (t > arr[i + 1]) {
    arr.splice(i, 1);
  }
});
