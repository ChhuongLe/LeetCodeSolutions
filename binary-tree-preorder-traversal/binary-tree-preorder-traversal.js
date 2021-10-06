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
    1. Input: Root of a tree
    2. Output: Preordered path
    3. Constraints: Number of nodes range from [0, 100]
                    -100 <= Node.val <= 100
    4. Edge Cases: None
*/

const preorderTraversal = (root, result=[]) => {
    // check if root is empty
    if (!root) {
        // if it is, return the current stack
        return [];
    }
    result.push(root.val);
    // otherwise, traverse through the binary tree starting from the left subtree
    if (root.left) {
        preorderTraversal(root.left, result);   
    }
    if (root.right) {
      preorderTraversal(root.right, result);
    }
    return result;
} 