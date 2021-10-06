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
    Inorder traversal: visit left, root, then right
    
    IOCE: 
        1. Input: Root of a binary tree
        2. Output: Array of nodes searched via inorder traversal
        3. Constraints: number of nodes in tree range from [0, 100]
                        -100 <= Node.val <= 1000
        4. Edge Cases: If head is null, return []
*/

/* Use a helper function to perform it recursively */
const traverse = (currNode, stack) => {
    // if the current node being checked is not null
    if (currNode !== null) {
        // check if there is a left side
        if (currNode.left !== null) {
            // if there is, continue traversing 
            traverse(currNode.left, stack)   
        } 
        // otherwise, push to stack
        stack.push(currNode.val);
        // check if there is a right node
        if (currNode.right !== null) {
            // continue the traversal
            traverse(currNode.right, stack);
        }
    }
};

// main function below
var inorderTraversal = function(root) {
    // initialize a stack
    let stack = [];
    // begin the traversal
    traverse(root, stack);
    // return the stack in the end
    return stack;
};

