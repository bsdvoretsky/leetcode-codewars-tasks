/**
 * // Definition for a Node.
 * function Node(val, children) {
 *  this.val = val;
 *  this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

var preorder = function(root) {
  res = [];
  
  const visitNode = (node) => {
    if (node !== null) {
      res.push(node.val);
      for (child of node.children) {
        visitNode(child);
      }
    }
  }
  
  visitNode(root);
  
  return res;
};