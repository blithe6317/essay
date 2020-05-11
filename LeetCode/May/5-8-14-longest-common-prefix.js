/**
    编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1:

    输入: ["flower","flow","flight"]
    输出: "fl"
    示例 2:

    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
    说明:

    所有输入只包含小写字母 a-z 。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let len = 0;
  let result = "";
  let flag = true;
  let first = strs[0];
  while (flag) {
    len++;
    result = first.substr(0, len);
    for (let i = 0; i < strs.length; i++) {
      let str = strs[i];
      if (len > str.length || str.substr(0, len) !== result) {
        flag = false;
        break;
      }
    }
  }
  return first.substr(0, len - 1);
};
