/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

/* IOCE: 
    input: references of nodes that are ajacent
    output: clone of the graph
    constraints: No repeated edges 
    edge cases: empty graph
*/

/* Depth first search method makes most sense as there is less back tracking involved
    1. Start at beginning node
    2. clone it 
    3. iterate through the given graph
    4. use a hash to determine if a node has been "seen" 
    5. use a queue to apply the edges to "seen" nodes
    6. continue until all nodes have been mapped
*/

var cloneGraph = function(node) {
    // If node is null return null
    if (node === null) {
        return null;
    }
    
    // this hash will the reference to the original graph
    const hash = new Map();
    
    // add the nodes into the queue
    const queue = [node];
    // Clone the starting node into the hash
    hash.set(node, new Node(node.val));
    
    // iterate throughout the queue until it is completely unpopulated
    while (queue.length > 0) {
        // Grab the next node in the queue
        const  currentNode = queue.shift();
        // iterate through all its adjacent neighbors 
        for (const neighbor of currentNode.neighbors) {
            // check if the neighbor been cloned
            if (!hash.has(neighbor)) {
                // if not, then map it and add neighbors into the queue to give it edges later
                hash.set(neighbor, new Node (neighbor.val));
                queue.push(neighbor);
            }
            // otherwise, draw the edges from the currentNode to its neighbors
            hash.get(currentNode).neighbors.push(hash.get(neighbor));
        }
    }
    // return the clone
    return hash.get(node);
};