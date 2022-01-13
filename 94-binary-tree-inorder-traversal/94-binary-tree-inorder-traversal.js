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
    IOCE:
        Input: Root of a tree
        Output: Array of integers
        Constraints: None
        Edge Cases: None
*/
var inorderTraversal = function(root) {
    let res = [];
    traverse(root);
    return res;
    
    function traverse(node) {
        if (node === null) {
            return;
        }
        traverse(node.left);
        res.push(node.val);
        traverse(node.right);
    }
};

