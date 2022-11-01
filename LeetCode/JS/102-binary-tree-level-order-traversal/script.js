/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
  let res = [];

  const levelOrderRec = (treeNode, lvl) => {
    if (treeNode !== null) {
      if (res.length < lvl) {
        res.push([]);
      }
      res[lvl - 1].push(treeNode.val);
      levelOrderRec(treeNode.left, lvl + 1);
      levelOrderRec(treeNode.right, lvl + 1);
    }
  }

  levelOrderRec(root, 1);
  
  return res;
};