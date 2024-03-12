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
 * @return {number[][]}
 */

var verticalOrder = function(root) {
    // if root is empty, return []
    if(!root) return [];
    // initialize a queue
    let queue = [];
    // initialize a map to keep track of where the nodes are located on the tree
    let m = new Map();
    queue.push({node: root, col: 0});
    while(queue.length > 0) {
        let { node, col } = queue.shift();
        if(m.has(col)) m.get(col).push(node.val);
        else m.set(col, [node.val]);
        // traverse through the tree and label them according to their position
        if(node.left) queue.push({node: node.left, col: col-1});
        if(node.right) queue.push({node: node.right, col: col+1});
    }
    // create an array from the map
    m = Array.from(m.entries());
    // sort each subset according to ascending order
    m.sort((a,b) => a[0] - b[0]);
    // return the final result
    return m.map((x) => x[1]);
};