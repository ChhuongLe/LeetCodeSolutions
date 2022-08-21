/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

/*
    find the number of indegree vertices
    if any vertices does not have an indegree, these will be the starting nodes
*/
var findSmallestSetOfVertices = function(n, edges) {
    let set = new Set();
    // traverse through the edges, store all the indegrees
    for(const [from, to] of edges) {
        set.add(to);
    }
    
    // traverse and find vertices that do not have indegrees
    let res = [];
    for(let i = 0; i < n; i++) {
        if(!set.has(i)) {
            // store this vertex
            res.push(i);
        }
    }
    
    // return the final result
    return res;         
};