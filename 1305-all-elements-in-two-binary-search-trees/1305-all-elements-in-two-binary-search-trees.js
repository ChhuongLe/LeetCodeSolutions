/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

// inorder Traversal of the BST
const inOrderTraversal = (node, arr) => {
    if(!node){
        return;
    }
    inOrderTraversal(node.left, arr);
    arr.push(node.val);
    inOrderTraversal(node.right,arr);
}
// sorting function that will handle negative and positive values 
const sortFunc = (a,b) => {
    return a-b;
}
var getAllElements = function(root1, root2) {
    // initialize 2 arrays to store the inorder traversal of the BSTs
    let arr1 = [];
    let arr2 = [];
    
    // perform the traversal using inorder method
    inOrderTraversal(root1, arr1);
    inOrderTraversal(root2, arr2);
    
    // combine the two arrays and sort the values
    let res = arr1.concat(arr2);
    res.sort(sortFunc);
    return res;
};
