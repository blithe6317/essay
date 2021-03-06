/**
    给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

    示例 1:

    输入: "aba"
    输出: True
    示例 2:

    输入: "abca"
    输出: True
    解释: 你可以删除c字符。
    注意:

    字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPail(s, left + 1, right) || isPail(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
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

var isPail1 = (str) => {
  let len = str.length;
  let mid = Math.floor(len / 2);
  let leftS = str.substr(0, mid);
  let rightS = "";
  let right = mid;
  if (len % 2 === 1) {
    right = mid + 1;
  }
  for (let i = len - 1; i >= right; i--) {
    rightS += str.charAt(i);
  }
  return leftS === rightS;
};
