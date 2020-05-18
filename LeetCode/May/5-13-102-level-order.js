/**
    给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

    示例：
    二叉树：[3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7
    返回其层次遍历结果：

    [
        [3],
        [9,20],
        [15,7]
    ]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let array = [];
  dp(root, 0, array);
  return array;
};

var dp = function (root, depth, array) {
  if (!root) return;
  if (!array[depth]) {
    array[depth] = [root.val];
  } else {
    array[depth].push(root.val);
  }

  if (root.left) {
    dp(root.left, depth + 1, array);
  }

  if (root.right) {
    dp(root.right, depth + 1, array);
  }
};
