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
 * @return {number[]}
 */

/*
    inorder traversal: 
        1. check left
        2. then root
        3. then right 
    
    algorithm: recursive
        1. perform an inorder traversal
*/


var inorderTraversal = function(root) {
    let res = [];
    // create the traversal path
    const traverse = (node) => {
    if(!node) {
        return;
    }
    // check left
    traverse(node.left);
    // store the values when the end is hit
    res.push(node.val);
    // traverse right
    traverse(node.right);
};
    // begin the traversal at the root
    traverse(root);
    // return res
    return res;
};