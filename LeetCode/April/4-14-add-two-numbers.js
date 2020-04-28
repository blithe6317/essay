/**
 *  给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
    你可以假设除了数字 0 之外，这两个数字都不会以零开头。

    进阶：
    如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

    输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 8 -> 0 -> 7
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(7);
const l1Next = new ListNode(2);
const l1NextN = new ListNode(4);
const l1NextNN = new ListNode(3);
l1NextN.next = l1NextNN;
l1Next.next = l1NextN;
l1.next = l1Next;

const l2 = new ListNode(5);
const l2Next = new ListNode(6);
const l2NextN = new ListNode(4);
l2Next.next = l2NextN;
l2.next = l2Next;
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(null);
  let node = l3;

  const l1Arr = listNodeToArr(l1).reverse();
  const l2Arr = listNodeToArr(l2).reverse();
  let maxLen = Math.max(l1Arr.length, l2Arr.length);
  let dow = true;
  let i = 0;
  let nextC = 0;
  let l3Arr = [];
  while (dow) {
    let count = (l1Arr[i] || 0) + (l2Arr[i] || 0) + nextC;
    let s = count % 10;
    if (count >= 10) {
      nextC = 1;
    } else {
      nextC = 0;
    }
    l3Arr.push(s);
    if (i >= maxLen) {
      dow = false;
      if (nextC === 1) {
        l3Arr.push(nextC);
      }
    }
    i++;
  }
  if (l3Arr[l3Arr.length - 1] === 0) {
    l3Arr.pop();
  }
  debugger;
  for (let i = l3Arr.length - 1; i >= 0; i--) {
    node.next = new ListNode(l3Arr[i]);
    node = node.next;
  }
  return l3.next;
};

var listNodeToArr = (l1) => {
  let arr = [];
  let node = l1;
  let dow = true;
  while (dow) {
    if (node.val >= 0) {
      arr.push(node.val);
    }
    if (node.next) {
      node = node.next;
    } else {
      dow = false;
    }
  }
  return arr;
};
