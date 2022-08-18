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
 * @return {TreeNode}
 */

// can do this recursively
var invertTree = function(root) {
    // base case
    if(!root) return null;
    // swap the children 
    let temp = root.left;
    root.left = root.right;
    root.right = temp
    // recurse 
    invertTree(root.left);
    invertTree(root.right);
    // return root
    return root;
};