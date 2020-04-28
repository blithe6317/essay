/**
 * 
    给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
    这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

    输入: pattern = "abba", str = "dog cat cat dog"
    输出: true

    输入:pattern = "abba", str = "dog cat cat fish"
    输出: false

    输入: pattern = "aaaa", str = "dog cat cat dog"
    输出: false
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let patternArr = pattern.split("");
  let strArr = str.split(" ");
  let obj = {};
  if (patternArr.length !== strArr.length) return false;
  for (let i = 0; i < patternArr.length; i++) {
    let key = patternArr[i];
    let val = strArr[i];
    if (obj.hasOwnProperty(key)) {
      if (obj[key] !== val) return false;
    } else {
      if (Object.keys(obj).every((k) => obj[k] !== val)) {
        obj[key] = val;
      } else {
        return false;
      }
    }
  }
  return true;
};
