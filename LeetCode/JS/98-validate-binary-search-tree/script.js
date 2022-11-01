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
 * @return {boolean}
 */

var isValidBST = function(root) {
  if (root === null) return true;
  
  const checkLeftSubTree = (treeNode, val) => {
    if (treeNode !== null) {
      if (treeNode.val >= val) return false;
      return checkLeftSubTree(treeNode.left, val) & checkLeftSubTree(treeNode.right, val);
    }
    return true;
  }
  
  const checkRightTree = (treeNode, val) => {
    if (treeNode !== null) {
      if (treeNode.val <= val) return false;
      return checkRightTree(treeNode.left, val) & checkRightTree(treeNode.right, val);
    }
    return true;
  }
  
  return checkLeftSubTree(root.left, root.val) & checkRightTree(root.right, root.val) & isValidBST(root.left) & isValidBST(root.right);
};