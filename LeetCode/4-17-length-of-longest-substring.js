/**
    给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

    输入: "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

    输入: "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

    输入: "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

// "dvdf"
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let str = new Set();
  let pro = 0;
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    let t = s.charAt(i);
    pro++;
    if (str.has(t)) {
      i = pro;
      str = new Set(s.charAt(i));
    } else {
      pro--;
      str.add(t);
    }
    len = Math.max(len, str.size);
  }
  return len;
};

var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let len = 0;
  let left = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let t = s.charAt(i);
    let index = str.indexOf(t);
    if (index !== -1) {
      left += s.slice(left, i).indexOf(t) + 1;
    }
    str = s.slice(left, i + 1);
    len = Math.max(len, str.length);
  }
  return len;
};
//  abcabcccc
