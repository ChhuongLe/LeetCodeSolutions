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
var isValidBST = function(root) {
    let inOrderArr = [];
    const inOrderTraversal = (node) => {
        if(!node) return [];
        return [...inOrderTraversal(node.left), node.val, ...inOrderTraversal(node.right)];
    }
    inOrder = inOrderTraversal(root);

    for(let i=1; i < inOrder.length; i++) {
        let curr = inOrder[i], prev = inOrder[i-1];

        if(prev >= curr) return false;
    }
    
    return true;
};
