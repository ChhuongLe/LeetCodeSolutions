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
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // merge t2 into t1
    // find missing nodes and add them
    if(root1 === null) {
        return root2;
    }
    else if(root2 === null){
        return root1;
    } else { // if both nodes exsist, add them together
        root1.val += root2.val;
    }
       
    // perform this recursively
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    
    // return the final form of the tree
    return root1;
};