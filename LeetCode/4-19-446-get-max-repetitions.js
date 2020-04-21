/**
    由 n 个连接的字符串 s 组成字符串 S，记作 S = [s,n]。例如，["abc",3]=“abcabcabc”。
    如果我们可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。例如，根据定义，"abc" 可以从 “abdbec” 获得，但不能从 “acbbe” 获得。
    现在给你两个非空字符串 s1 和 s2（每个最多 100 个字符长）和两个整数 0 ≤ n1 ≤ 106 和 1 ≤ n2 ≤ 106。现在考虑字符串 S1 和 S2，其中 S1=[s1,n1] 、S2=[s2,n2] 。
    请你找出一个可以满足使[S2,M] 从 S1 获得的最大整数 M 。

    输入：
    s1 ="acb",n1 = 4
    s2 ="ab",n2 = 2

    返回：
    2
 */
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");

  let index = 0;
  let count = 0;

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[index]) {
        index++;
      }
      if (index === arr2.length) {
        index = 0;
        count++;
      }
    }
  }
  return parseInt(count / n2);
};

/**
 * s1 = acb n1 = 4
 * s2 = ab n2 = 2
 *
 *
 * acb-acb-acb-acb
 * ab-ab
 *
 */
