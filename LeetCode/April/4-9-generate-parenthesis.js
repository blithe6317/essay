/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 输入：n = 3
   输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
 * 
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (!n) return [];
  var set = getAll(n);
  return set;
};

var getAll = (n) => {
  var set = [];
  var s = "";

  var get = (s, adds, l, r) => {
    let left = l || 0;
    let right = r || 0;
    debugger;
    if (s.length <= 2 * n) {
      if (s.length === 2 * n) {
        //   if (valid(s) && !set.includes(s)) {
        set.push(s);
        //   }
        return;
      } else {
        s += adds;
        if (left < n) {
          get(s, "(", left + 1, right);
        }
        if (right < n) {
          get(s, ")", left, right + 1);
        }
      }
    }
  };
  get(s, "(", 0, 0);
  return set;
};

var valid = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    var str = s.charAt(i);
    switch (str) {
      case "(":
        count++;
        break;
      case ")":
        count--;
        break;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
};

var generateParenthesis1 = function (n) {
  if (!n) return [];
  var result = [];
  dfs("", n, n, result);
  return result;
};

var dfs = (str, left, right, res) => {
  if (left === 0 && right === 0) {
    res.push(str);
  }
  if (left > right) {
    return;
  }
  if (left > 0) {
    dfs(str + "(", left - 1, right, res);
  }
  if (right > 0) {
    dfs(str + ")", left, right - 1, res);
  }
};

/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var arr = s.split("");
  if (arr.length % 2 === 1) return false;

  let result = false;
  debugger;
  let q = [];
  for (let i = 0; i < arr.length; i++) {
    var str = arr[i];
    if (isClear(q, str)) {
      q.pop();
    } else {
      q.push(str);
    }
  }
  return q.length === 0;
};
var isClear = (q, s) => {
  if (s === ")" || s === "]" || s === "}") {
    var qlast = q[q.length - 1];
    switch (s) {
      case ")":
        return qlast === "(";
      case "]":
        return qlast === "[";
      case "}":
        return qlast === "{";
    }
    return false;
  }
};
