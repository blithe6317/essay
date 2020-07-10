/**
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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

let tree = new TreeNode(5);
tree.left = new TreeNode(4);
tree.right = new TreeNode(8);
tree.right.left = new TreeNode(13);
tree.right.right = new TreeNode(4);
tree.right.right.right = new TreeNode(1);
tree.left.left = new TreeNode(11);
tree.left.left.left = new TreeNode(7);
tree.left.left.right = new TreeNode(2);

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  const sumFn = (root, count) => {
    if (!root) {
      return false;
    }
    count += root.val || 0;
    if (root.left === null && root.right === null) {
      if (count === sum) {
        return true;
      }
      return false;
    }
    return sumFn(root.left, count) || sumFn(root.right, count) || false;
  };
  return sumFn(root, 0);
};

const sort = ["a", "b", "c", "d"];
const data = [{ i: "a" }, { i: "b" }, { i: "d" }, { i: "f" }];

const sortList = (sort, data) => {
  data.sort((a, b) => {
    let ai = sort.indexOf(a.i);
    let bi = sort.indexOf(b.i);
    ai = ai === -1 ? Infinity : ai;
    bi = bi === -1 ? Infinity : bi;
    return ai - bi;
  });
};
