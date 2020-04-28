/**
 * 给定一个字符串，逐个翻转字符串中的每个单词
 * 输入: "the sky is blue"
   输出: "blue is sky the"
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s
    .trim()
    .split(" ")
    .filter((s) => s)
    .reverse()
    .join(" ");
  return str;
};

var reverseWords1 = function (s) {
  let str = s
    .trim()
    .split(" ")
    .filter((s) => s)
    .reverse()
    .join(" ");
  return str;
};

/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
   你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

   给定 nums = [2, 7, 11, 15], target = 9
   因为 nums[0] + nums[1] = 2 + 7 = 9
   所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
var twoSum1 = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i];
    if (arr[dif] !== undefined) {
      return [arr[dif], i];
    }
    arr[nums[i]] = i;
  }
};

/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
   如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
   您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

   输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
   输出：7 -> 0 -> 8
   原因：342 + 465 = 807
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let arr1 = [];
  let arr2 = [];
  get(arr1, l1);
  get(arr2, l2);
  let len = Math.max(arr1.length, arr2.length);
  let result = [];
  let node = new ListNode();
  for (let i = 0; i < len; i++) {
    let a = arr1[i] || 0;
    let b = arr2[i] || 0;
    let c = a + b + (result[i] || 0);
    let d = c % 10;

    result[i] = d;
    if (c >= 10) {
      result[i + 1] = 1;
    }
  }
  console.log(result);
  let netNode = node;
  for (let i = 0; i < result.length; i++) {
    let n = new ListNode(result[i]);
    netNode.next = n;
    netNode = netNode.next;
  }
  function get(s, l1) {
    s.push(l1.val);
    if (l1.next) {
      get(s, l1.next);
    }
  }
  return node.next;
};
var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
addTwoNumbers(l1, l2);

function get(arr1, arr2) {
  let len = Math.max(arr1.length, arr2.length);
  let result = [];
  for (let i = 0; i < len; i++) {
    let a = arr1[i] || 0;
    let b = arr2[i] || 0;
    let c = a + b + (result[i] || 0);
    let d = c % 10;

    result[i] = d;
    if (c >= 10) {
      result[i + 1] = 1;
    }
  }
  console.log(result);
}

var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(null);
  let node = l3;
  let doW = true;
  let l1d = l1;
  let l2d = l2;
  let o = 0;
  while (doW) {
    let add = l1d.val + l2d.val + o;
    let val = add % 10;
    if (add >= 10) {
      o = 1;
    } else {
      o = 0;
    }
    node.next = new ListNode(val);

    node = node.next;
    if (l1d.next || l2d.next) {
      if (l1d.next) {
        l1d = l1d.next;
      } else {
        l1d = new ListNode(0);
      }
      if (l2d.next) {
        l2d = l2d.next;
      } else {
        l2d = new ListNode(0);
      }
    } else {
      if (o) {
        node.next = new ListNode(o);
      }
      doW = false;
    }
  }
  return l3.next;
};
