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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

/* two options: in order traversal vs recursion
    in order traversal: o(n) 
    recursion: o(n)

    Lets pick the recursive option as it can prevent uneeded checks on larger or smaller integers.
*/
var rangeSumBST = function(root, low, high) {
    // if the root is empty return nothing
    if(!root) return 0;
    if(root.val < low) return rangeSumBST(root.right, low, high);
    if(root.val > high) return rangeSumBST(root.left, low, high);
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};