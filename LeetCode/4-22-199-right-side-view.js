/**
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
 /
3
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 *      1
 *   2      5
 *      5
 */

let root = new TreeNode(1);

var rightSideView = function (root) {
  let arr = [];
  if (!root) return arr;

  function findArr(root, dep) {
    if (root && root.val) {
      arr[dep] = root.val;
    }
    if (root.left) {
      findArr(root.left, dep + 1);
    }
    if (root.right) {
      findArr(root.right, dep + 1);
    }
  }

  if (root) {
    findArr(root, 0);
  }

  return arr;
};
