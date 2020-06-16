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
  if (!strs || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  //   strs.sort((a, b) => a.length - b.length);
  let len = Math.max.apply(
    0,
    arr.map((i) => i.length)
  );
  let str = "";
  while (len >= 0) {
    str = strs[0].substring(0, len);
    let flag = true;
    for (let i = 1; i < strs.length; i++) {
      let s = strs[i];
      if (s.substring(0, len) !== str) {
        flag = false;
        len--;
        break;
      }
    }
    if (flag) {
      return str;
    }
  }
  return "";
};
