/**
    给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

    示例 1:

    输入: 1->1->2
    输出: 1->2
    示例 2:

    输入: 1->1->2->3->3
    输出: 1->2->3
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
let tree = new ListNode(1);
tree.next = new ListNode(1);
tree.next.next = new ListNode(2);
tree.next.next.next = new ListNode(2);
tree.next.next.next.next = new ListNode(4);
tree.next.next.next.next.next = new ListNode(4);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let node = head;
  while (node !== null && node.next !== null) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};
