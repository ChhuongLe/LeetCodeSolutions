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

/*
    split nodes according to x, y, and value:
        x - represented by what column they're located in
        y - represented by what row they're located in
        
    conditions:
        if they are in the same x column, the one in the highest y takes precedence, then y-1 and so on
        if they are in the same x and y, the one with the smallest value takes precedence 
    
    Algorithm: 
        1. initialize an array where it stores the node info (ie [[x1,y1,val1],[x2,y2,val2]])
        2. traverse through the tree 
        3. begin adding the information of the tree into the array
        4. after all the information has been added, sort the nodes according to the conditions listed above
        5. add the nodes' value with the same x parameter into the same bucket (can use a map to make it easier)
        6. return the map values of buckets
*/


const verticalTraversal = (root) => {
    let treeInfo = [];
    
    // inOrder traversal and add coordinates/values into nodeInfo arr
    const appendNodeInfo = (node, x, y) => {
        if(node) {
            //traverse left
            appendNodeInfo(node.left, x-1, y-1);
            // append
            treeInfo.push([x, y, node.val]);
            //traverse right
            appendNodeInfo(node.right, x+1, y-1);
        }
    };
    
    appendNodeInfo(root, 0, 0, treeInfo);
    // console.log(nodeInfo);
    
    // sort the according to the conditions above
    treeInfo.sort((a,b) => a[0]-b[0] || b[1]-a[1] || a[2]-b[2]);
    // console.log(nodeInfo);
    
    // sort the nodeInfo array into buckets
    let map = new Map();
    
    for(let [x, y, val] of treeInfo) {
        if(!map.has(x)){
            map.set(x, []);
        }
        map.get(x).push(val);
    }
    // console.log([...map.values()]);
    return [...map.values()];
};