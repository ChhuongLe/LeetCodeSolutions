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

/* IOCE:
    Input: root node of tree
    Output: array of integers
    Constraints: None
    Edge Cases: None
*/

var postorderTraversal = function(root) {
    // initialize a result array to return
    let res = [];
    // helper function to traverse through the tree
    const traverse = (node) => {
        if (node === null) {
            return;
        }
        traverse(node.left);
        traverse(node.right);
        res.push(node.val);
    }
    // traverse through the tree
    traverse(root);
    // return the arry
    return res
};