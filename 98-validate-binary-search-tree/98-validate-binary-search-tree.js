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

// perform an inorder traversal
var isValidBST = function(root) {
    // initialize an empty arr to store the traversal path
    let arr = [];
    // function that performs inorder traversal
    const inOrder = (node) => {
        if(node === null){
            return;
        }
        // go all the way left
        inOrder(node.left);
        // store the value into the array
        arr.push(node.val);
        // go all the way right
        inOrder(node.right);
        // return the final array
        return arr;
    }
    // perform the traversal and store it into res
    let res = inOrder(root, arr);
    // loop through array and check if the numbers are in ascending order
    for(let i = 1; i < arr.length; i++) {
        if(arr[i-1] >= arr[i]){
            return false;
        }
    }
    return true;
};