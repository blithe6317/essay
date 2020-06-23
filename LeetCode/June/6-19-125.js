/**
    给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
    说明：本题中，我们将空字符串定义为有效的回文串。
    示例 1:

    输入: "A man, a plan, a canal: Panama"
    输出: true
    示例 2:

    输入: "race a car"
    输出: false
 */
let s =
  "dadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4hdadwqiodjqwiojdqwdmkmxcsjkbch;A'Q[WQWPEDKQ,LZX,ZKSMXKSAHCJZBCYHASGDYWGADDJKNSKLDNASLDJIQWJEO   sajdsjknfjnjnjasndasndklmaskldmiwqjqpeoiowueyqwuqtyeuwqgbzmxz,xmczxmcl,c;ds;fsdkfl5er4tg5e1rga1g5rea4tg8ert78ae9faw5ef6a2we3f23s1fa2e54f5ear87t8ear7t8er785re4afg1df2121a5e6h6ty5u9y78i95u6j2hg1j5g4h";

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === "") return true;
  let reg = new RegExp(/([^0-9a-z])/, "g");
  s = s.toLocaleLowerCase().replace(reg, "");
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

let test = (s) => {
  console.time();
  s.toLocaleLowerCase().replace("?", "A");
  console.timeEnd();
};
