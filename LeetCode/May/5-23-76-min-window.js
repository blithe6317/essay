/**
    给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。

    示例：

    输入: S = "ADOBECODEBANC", T = "ABC"
    输出: "BANC"
    说明：

    如果 S 中不存这样的子串，则返回空字符串 ""。
    如果 S 中存在这样的子串，我们保证它是唯一的答案。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let min = Infinity;
  let start = 0,
    end = start;

  let str = "";
  var map = {};
  var map1 = {};
  if (s === t) return t;

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]++;
    } else {
      map[t[i]] = 1;
    }
  }
  map1[s[0]] = 1;
  while (start <= end && end < s.length && min > t.length) {
    if (hasStr(map1, map)) {
      if (min > end - start + 1) {
        min = end - start + 1;
        str = s.substring(start, end + 1);
      }

      if (map1[s[start]]) {
        map1[s[start]]--;
        if (map1[s[start]] === 0) {
          delete map1[s[start]];
        }
      }
      start++;
    } else {
      end++;
      if (map1[s[end]]) {
        map1[s[end]]++;
      } else {
        map1[s[end]] = 1;
      }
    }
  }

  return str;
};

var hasStr = (map1, map) => {
  for (let key in map) {
    if (map1[key] === undefined) return false;
    if (map[key] > map1[key]) {
      return false;
    }
  }
  return true;
};
