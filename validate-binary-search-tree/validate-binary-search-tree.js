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
 * @return {boolean}
 */

/* IOCE: 
    input: root node
    output: boolean
    constraints: none
    edge cases: none
*/

/* In order traversal:
    if the traversal is in order, then the numbers checked should go from least to greatest 
*/
var isValidBST = function(root) {
    // use recursive function to search BST using inorder traversal
    // initialize comparator to preiously searched value
    let lastChecked = null;
    
    // recusive function for inOrder traversal
    const inOrder = (root) => {
        // Base case: if the end has been reached and no issues have arisen, return true
        if(root === null) {
           return true;
        } 
        // otherwise look at all the left children
        let leftSubTree = inOrder(root.left);
        
        // if lastChecked has a value, check if current traversal is in order
        if(lastChecked !== null && lastChecked >= root.val) {
            // if it isnt return false
            return false;
        }
        // if the traversal is successful set the lastChecked to be the currently inspected item 
        lastChecked = root.val;
        
        // check right subtree after all left items haven been traversed through
        let rightSubTree = inOrder(root.right);
        
        // once all has been checked, return the result
        return leftSubTree && rightSubTree;
    }
    
    
    return inOrder(root);
};