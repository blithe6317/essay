/**
    给定一个二叉树，判断其是否是一个有效的二叉搜索树。

    假设一个二叉搜索树具有如下特征：

    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。
    示例 1:

    输入:
        2
    / \
    1   3
    输出: true
    示例 2:

    输入:
        5
    / \
    1   4
         / \
        3   6
    输出: false
    解释: 输入为: [5,1,4,null,null,3,6]。
         根节点的值为 5 ，但是其右子节点值为 4 。
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let node1 = new TreeNode(2);
node1.left = new TreeNode(1);
node1.right = new TreeNode(3);

let node2 = new TreeNode(5);
node2.left = new TreeNode(1);
node2.right = new TreeNode(4);
node2.right.left = new TreeNode(3);
node2.right.right = new TreeNode(6);

let node3 = new TreeNode(1);
node3.left = new TreeNode(1);

let node4 = new TreeNode(10);
node4.left = new TreeNode(5);
node4.right = new TreeNode(15);
node4.right.left = new TreeNode(6);
node4.right.right = new TreeNode(20);

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;

  return dfs(root, null, null);
};

var dfs = function (tree, low, up) {
  if (!tree) return true;
  const { left, right, val } = tree;

  if (low !== null && val <= low) return false;
  if (up !== null && val >= up) return false;
  if (!dfs(left, low, val)) return false;
  if (!dfs(right, val, up)) return false;

  return true;
};
