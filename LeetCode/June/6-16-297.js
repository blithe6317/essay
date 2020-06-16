/**
    序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
    请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

    示例: 

    你可以将以下二叉树：

        1
       / \
      2   3
         / \
        4   5

    序列化为 "[1,2,3,null,null,4,5]"
    提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

    说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。
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

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(5);
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let result = [];
  if (root && root.val !== null) {
    result.push(root.val);
  }
  const find = (roots) => {
    let newRoots = [];
    for (let i = 0; i < roots.length; i++) {
      let root = roots[i];
      if (root !== null) {
        let left = root.left ? root.left.val : null;
        let right = root.right ? root.right.val : null;
        result.push(left, right);
        if (left !== null) {
          newRoots.push(root.left);
        }
        if (right !== null) {
          newRoots.push(root.right);
        }
      }
    }
    if (newRoots.length > 0) {
      find(newRoots);
    }
  };
  find([root]);
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] === null) {
      result.splice(i, 1);
    } else {
      break;
    }
  }
  return JSON.stringify(result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let arr = JSON.parse(data);
  if (!arr || arr.length <= 0) return null;
  let i = 0;
  let root = new TreeNode(arr[0]);

  const find = (roots) => {
    let newRoots = [];
    for (let j = 0; j < roots.length; j++) {
      let root = roots[j];
      if (root && root.val !== null) {
        let left = arr[++i];
        let right = arr[++i];
        if (left !== null && left !== undefined) {
          root.left = new TreeNode(left);
          newRoots.push(root.left);
        }
        if (right !== null && right !== undefined) {
          root.right = new TreeNode(right);
          newRoots.push(root.right);
        }
      }
    }
    if (newRoots.length > 0) {
      find(newRoots);
    }
  };
  find([root]);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
