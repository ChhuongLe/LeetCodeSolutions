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

 /*
    IOCE: 
        Input: root - root of the binary tree
        Output: result - boolean indicating whether it is a BST or not
        Constraints: will always have a node
                     nodes will always have valid values
        Example: 
            [2,1,3] -> inorder traversal will output 1,2,3 True
            [5,1,4,null,null,3,6] -> 1,5,3,4,6 false as this is not in ascending order
        
    Algo: 
        create an array of values using the inorder traversal method
        traverse through this array and check if all the values are in ascending order
 */
var isValidBST = function(root) {
    let nodes = [];
    let inOrderTraversal = (node) => {
        if(!node) return [];
        return [... inOrderTraversal(node.left), node.val, ...inOrderTraversal(node.right)];
    }
    nodes = inOrderTraversal(root);
    for(let i = 1; i < nodes.length; i++) {
        let prev = nodes[i-1], curr = nodes[i];
        if(prev >= curr) return false;
    }
    return true;
};
