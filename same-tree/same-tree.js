/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/*IOCE: 
    Inputs: 2 roots of 2 binary trees
    Outputs: boolean
    Constraints/Complexities: number of nodes in both trees range from [0, 100]
                             value of each node range from -10^4 <= Node.val <= 10^4
    Edge Cases: None
*/

const isSameTree = (p, q) => {
    // see if p and q are null, if they both are, return true
    if (!p && !q) {
        return true;
    }
    // if only one of them is null and the other is not, return false
    if (!p || !q) {
        return false;
    }
    // otherwise, check if their subtree values are equal and in the same area
    return (p.val === q.val && isSameTree(p.right, q.right) && isSameTree(p.left, q.left));
};
