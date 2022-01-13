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
var inorderTraversal = function(root) {
    // initialize an array for the integers to be stored into
    let res = [];
    // helper function for the traversal
    const traverse = (node) => {
        // if the node is null, return 
        if (node === null){
            return;
        }
        // otherwise, search all the way left
        traverse(node.left);
        // add integer into the array
        res.push(node.val);
        // search right
        traverse(node.right);
    }
    // return the array at the end of the traversal
    
    traverse(root);
    return res;
};