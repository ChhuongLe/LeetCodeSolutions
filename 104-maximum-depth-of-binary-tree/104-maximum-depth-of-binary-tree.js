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
 * @return {number}
 */
var maxDepth = function(root) {
    // perform a bfs and find the max depth
    if (root === null || root === undefined) {
       return 0;
    } 
    // search all of the left side
    let l = maxDepth(root.left);
    // search all of the right side
    let r = maxDepth(root.right);
    
    // return the max 
    return Math.max(l,r)+1;
};