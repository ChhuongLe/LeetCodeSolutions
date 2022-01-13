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
        Input: Root node of a tree
        Output: array of integers
        Constraints: None
        Edge Cases: None
*/

var preorderTraversal = function(root) {
    // initialize an array to store the integers
    let res = [];
    
    const traverse = (node) => {
        // if the node is null, return 
        if (node === null) {
            return;
        }
        // otherwise push the first value found into the array
        res.push(node.val);
        // search left
        traverse(node.left);
        // then search right
        traverse(node.right);
    }
    // traverse through the tree
    traverse(root);
    
    // return the resulting array
    return res;
};