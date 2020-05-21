/**
    给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

    示例 1：

    输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。
    示例 2：

    输入: "cbbd"
    输出: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0;
  let str = "";
  for (let i = 0; i < s.length - max; i++) {
    for (let j = i + max; j < s.length; j++) {
      if (isPail(s, i, j)) {
        if (max < j - i + 1) {
          max = j - i + 1;
          str = s.substr(i, j + 1);
        }
      }
    }
  }
  return str;
};

var isPail = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
