/**
    给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
    百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
    例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

                3
               /  \
            5      1
           / \    / \
          6   2  0   8
             / \
            7   4

    示例 1:

    输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
    输出: 3
    解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
    示例 2:

    输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
    输出: 5
    解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。


    说明:

    所有节点的值都是唯一的。
    p、q 为不同节点且均存在于给定的二叉树中。
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

let node = new TreeNode(3);
node.left = new TreeNode(5);
node.left.left = new TreeNode(6);
node.left.right = new TreeNode(2);
node.left.right.left = new TreeNode(7);
node.left.right.right = new TreeNode(4);

node.right = new TreeNode(1);
node.right.left = new TreeNode(0);
node.right.right = new TreeNode(8);
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  return dp(root, p, q);
};

var dp = function (node, p, q) {
  let haslp = hasNode(node.left, p);
  let haslq = hasNode(node.left, q);
  if (haslp && haslq) {
    return dp(node.left, p, q);
  }
  let hasrp = haslp ? false : hasNode(node.right, p);
  let hasrq = haslq ? false : hasNode(node.right, q);

  if (hasrp && hasrq) {
    return dp(node.right, p, q);
  } else {
    return node;
  }
};

var hasNode = function (root, node) {
  if (!root) return false;
  if (root.val === node.val) {
    return true;
  }
  return hasNode(root.left, node) || hasNode(root.right, node);
};
