/**
 *  给定一副牌，每张牌上都写着一个整数。

    此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

    每组都有 X 张牌。
    组内所有的牌上都写着相同的整数。
    仅当你可选的 X >= 2 时返回 true。

    输入：[1,2,3,4,4,3,2,1]
    输出：true
    解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

    输入：[1,1,1,2,2,2,3,3]
    输出：false
    解释：没有满足要求的分组。

    输入：[1]
    输出：false
    解释：没有满足要求的分组。

    输入：[1,1]
    输出：true
    解释：可行的分组是 [1,1]

    输入：[1,1,2,2,2,2]
    输出：true
    解释：可行的分组是 [1,1]，[2,2]，[2,2]
 */

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  let result = false;
  if (deck.length <= 1) {
    return false;
  }
  let sortArr = deck.sort((a, b) => a - b);

  let dow = true;
  let X = 2;
  while (dow) {
    if (X > sortArr.length) {
      dow = false;
    } else {
      if (sortArr.length % X === 0) {
        let isEvery = true;
        for (let i = 0; i < sortArr.length / X; i++) {
          let newArr = Array(X)
            .fill(0)
            .map((a, index) => {
              return sortArr[i * X + index];
            });

          if (!newArr.every((val) => val === newArr[0])) {
            X++;
            isEvery = false;
            break;
          }
        }
        if (isEvery) {
          result = true;
          dow = false;
        }
      } else {
        X++;
      }
    }
  }
  return result;
};

var hasGroupsSizeX1 = function (deck) {
  let result = false;
  if (deck.length <= 1) {
    return false;
  }
  let obj = {};

  deck.forEach((val) => {
    if (obj.hasOwnProperty(val)) {
      obj[val] = obj[val] + 1;
    } else {
      obj[val] = 1;
    }
  });

  let dow = true;
  let X = 2;
  while (dow) {
    if (X > deck.length) {
      dow = false;
    } else {
      let isEvery = Object.keys(obj).every((key) => obj[key] % X === 0);
      if (isEvery) {
        result = true;
        dow = false;
      } else {
        X++;
      }
    }
  }
  return result;
};

var hasGroupsSizeX1 = function (deck) {
  if (deck.length <= 1) {
    return false;
  }
  let obj = {};
  let max = 0;
  for (let i = 0; i < deck.length; i++) {
    let val = deck[i];
    obj[val] = obj[val] ? obj[val] + 1 : 1;
    max = Math.max(max, obj[val]);
  }

  let X = 2;
  let keys = Object.keys(obj);
  while (X <= max) {
    if (keys.every((key) => obj[key] % X === 0)) return true;
    X++;
  }
  return false;
};

// var hasGroupsSizeX = function (deck) {
//   let o = {},
//     max = 0;
//   for (let i = 0; i < deck.length; i++) {
//     const t = deck[i];
//     if (!o[t]) o[t] = 1;
//     else o[t]++;
//     max = Math.max(max, o[t]);
//   }
//   const arr = Object.values(o);
//   let x = 2;
//   while (x <= max) {
//     if (arr.every((item) => item % x == 0)) return true;
//     x++;
//   }
//   return false;
// };
