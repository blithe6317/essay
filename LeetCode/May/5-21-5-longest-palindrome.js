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
          str = s.substr(i, j + 1 - i);
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

var longestPalindrome = function (str) {
  if (str.length <= 1) return str;
  var start = 0,
    end = 0;
  for (let i = 0; i < str.length; i++) {
    let len1 = expandAroundCenter(str, i, i);
    let len2 = expandAroundCenter(str, i, i + 1);

    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return str.substring(Math.ceil(start), Math.floor(end + 1));
};

var expandAroundCenter = function (str, left, right) {
  let l = left;
  let r = right;

  while (l >= 0 && r < str.length && str.charAt(l) === str.charAt(r)) {
    l--;
    r++;
  }

  return r - l - 1;
};

var longestPalindrome = function (s) {
  let max = 0;
  let str = "";
  for (let i = 0; i < s.length - max; i++) {
    max = Math.max(max, center(s, i, i));
  }
  return str;
};

var center = (str, left, right) => {
  let max = 1;
  while (left > 0 && right < str.length && str[left] === str[right]) {
    max = right - left + 1;
    left--;
    right++;
  }
  return max;
};
