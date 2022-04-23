/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/*
    given: number of nodes in the tree can be 0
    
    algorithm: Level order traversal (iterative)
        1. check if the root has a node present
        2. initialize parameters to keep track of where we are in the tree
            2a. currentLevel 
            2b. queue to populate when we are in a level with multiple nodes 
        3. traverse through the tree
            3a. use queue as a reference for the traversal
            3b. check if the queue has other values
                3ba. if it does, check if the conditions of it being in the same level are met
                    3baa. if the conditions are met, set the pointer from the node across and the next pointer
            3c. if it does not
                3ca. search through the tree and populate the queue
            3d. continue to do so until all nodes have been visited
        4. return the final tree
*/
var connect = function(root) {
    if(!root){
        return root;
    }
    // initialize parameters to keep track of where we are in the tree
    let level = 0, queue = [[root, level]];
    // traverse the root while the queue is still populated
    while(queue.length) {
        // store the parameters in the front of the queue
        const [currNode, level] = queue.shift();
        // if the queue still has values inside of it
        if(queue.length) {
            // store next values in the queue
            let [nextNode, nextLevel] = queue[0];
            if(level === nextLevel){
                currNode.next = nextNode;
            }
        }
        // otherwise there is nothing else in the queue and we shall traverse the rest of the tree starting from the left side
        if(currNode.left) queue.push([currNode.left, level+1]);
        if(currNode.right) queue.push([currNode.right, level+1]);
    }
    
    return root;
};