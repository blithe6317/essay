/**
    将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4

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

let node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(4);

let node2 = new ListNode(1);
node2.next = new ListNode(3);
node2.next.next = new ListNode(4);
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let result = new ListNode(null);
  let node = result;
  let flag = true;

  let node1 = l1;
  let node2 = l2;
  if (!node1 || !node1.val) {
    return l2;
  }
  if (!node2 || !node2.val) {
    return l1;
  }
  while (flag) {
    if (node1.val < node2.val) {
      node.next = new ListNode(node1.val);
      if (node1.next) {
        node1 = node1.next;
      } else {
        node.next.next = node2;
        flag = false;
      }
    } else {
      node.next = new ListNode(node2.val);
      if (node2.next) {
        node2 = node2.next;
      } else {
        node.next.next = node1;
        flag = false;
      }
    }

    node = node.next;
  }
  return result.next;
};
