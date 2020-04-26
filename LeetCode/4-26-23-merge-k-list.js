/**
    合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

    输入:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    输出: 1->1->2->3->4->4->5->6

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
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

let list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

let list3 = new ListNode(2);
list3.next = new ListNode(6);
list3.next.next = new ListNode(8);
list3.next.next.next = new ListNode(9);

var mergeKLists = function (lists) {
  let newArr = [];
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i];
    let toArray = listNodeToArray(list);
    newArr = newArr.concat(toArray);
  }

  newArr.sort((a, b) => a - b);

  return arrayTolistNode(newArr);
};

var listNodeToArray = function (listNode) {
  let result = [];
  let node = listNode;
  if (node) {
    result.push(node.val);
  }
  while (node && node.next) {
    result.push(node.next.val);
    node = node.next;
  }
  return result;
};
var arrayTolistNode = function (array) {
  if (!array || array.length === 0) return null;
  let result = new ListNode(null);
  let node = result;
  for (let i = 0; i < array.length; i++) {
    let n = array[i];
    node.val = n;
    if (i !== array.length - 1) {
      node.next = new ListNode(null);
      node = node.next;
    }
  }
  return result;
};

let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

let list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

function mergeKLists2(lists) {
  if (lists.length === 0) {
    return new ListNode(null);
  }
  if (lists.length === 1) {
    return lists[0];
  }
  let result = lists[0];
  for (let i = 1; i < lists.length; i++) {
    result = mergeTwoList(result, lists[i]);
  }
  return result;
}

function mergeKLists3(lists) {
  if (lists.length === 0) {
    return null;
  }
  if (lists.length === 1) {
    return lists[0];
  }

  return merge(lists, 0, lists.length - 1, null);
}

function merge(lists, start, end, res) {
  if (start === end) {
    return mergeTwoList(res, lists[end]);
  } else if (start + 1 === end) {
    let newRes = mergeTwoList(lists[start], lists[end]);
    return mergeTwoList(newRes, res);
  } else {
    let newRes = mergeTwoList(lists[start], lists[end]);

    return merge(lists, start + 1, end - 1, mergeTwoList(newRes, res));
  }
}

function mergeTwoList(list1, list2) {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  }
  let result = new ListNode(null);
  let node = result;
  let flag = true;

  let aNode = list1;
  let bNode = list2;
  while (flag) {
    if (aNode.val > bNode.val) {
      node.next = new ListNode(bNode.val);
      if (!bNode.next) {
        node = node.next;
        node.next = aNode;
        flag = false;
      } else {
        bNode = bNode.next;
      }
    } else {
      node.next = new ListNode(aNode.val);
      if (!aNode.next) {
        node = node.next;
        node.next = bNode;
        flag = false;
      } else {
        aNode = aNode.next;
      }
    }

    node = node.next;
  }
  return result.next;
}

let l1 = new ListNode(-10);
l1.next = new ListNode(-9);
l1.next.next = new ListNode(-9);
l1.next.next.next = new ListNode(-3);
l1.next.next.next.next = new ListNode(-1);
l1.next.next.next.next.next = new ListNode(-1);
l1.next.next.next.next.next.next = new ListNode(0);

let l2 = new ListNode(-5);
let l3 = new ListNode(4);
let l4 = new ListNode(-8);
let l5 = new ListNode(null);
let l6 = new ListNode(-9);
l6.next = new ListNode(-6);
l6.next.next = new ListNode(-5);
l6.next.next.next = new ListNode(-4);
l6.next.next.next.next = new ListNode(-2);
l6.next.next.next.next.next = new ListNode(2);
l6.next.next.next.next.next.next = new ListNode(3);

let l7 = new ListNode(-4);
l7.next = new ListNode(-3);
l7.next.next = new ListNode(-3);
l7.next.next.next = new ListNode(-3);
l7.next.next.next.next = new ListNode(-2);
l7.next.next.next.next.next = new ListNode(-1);
l7.next.next.next.next.next.next = new ListNode(0);
