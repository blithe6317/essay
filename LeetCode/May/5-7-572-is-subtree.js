/**
    给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

    示例 1:
    给定的树 s:

         3
        / \
       4   5
      / \
     1   2
    给定的树 t：

         4 
        / \
       1   2
    返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。

    示例 2:
    给定的树 s：

        3
        / \
       4   5
      / \
     1   2
        /
       0
    给定的树 t：

     4
    / \
   1   2
    返回 false。
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

let tree = new TreeNode(3);
tree.left = new TreeNode(4);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(2);
tree.right = new TreeNode(5);

let tree2 = new TreeNode(4);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(2);

let tree3 = new TreeNode(4);
tree3.left = new TreeNode(1);
tree3.right = new TreeNode(3);

let tree4 = new TreeNode(5);
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  let obj = { val: 0 };
  dp(s, t, obj);
  return obj.val > 0;
};

var dp = function (s, t, obj) {
  if (JSON.stringify(s) === JSON.stringify(t)) {
    obj.val++;
  }

  if (s.left && !obj.val) {
    dp(s.left, t, obj);
  }
  if (s.right && !obj.val) {
    dp(s.right, t, obj);
  }
};

var isSubtree = function (s, t) {
  if (!s || !t) return false;
  return check(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

var check = function (tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true;
  }
  if (tree1 === null || tree2 === null) {
    return false;
  }
  if (tree1.val === tree2.val) {
    return check(tree1.left, tree2.left) && check(tree1.right, tree2.right);
  }
  return false;
};
