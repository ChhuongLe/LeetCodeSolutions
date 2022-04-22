/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

/*
    IOCE: 
        Input: directed acyclic graph
        output: paths from 0 to n-1 
        constraints: n will always have something inside of it
        edge cases: none to consider
*/ 
/*
    Algorithm:
        1. perform a DFS
            1a. DFS will traverse through the map
            1b. If the end is found, then a path is found
            1c. Add this path to an array
            1d. Backtrack and find new unique paths
        2. return the final result of all the paths
*/
var allPathsSourceTarget = function(graph) {
    // initialize a variable
    let end = graph.length-1;
    // initialize an array to store the paths
    let paths = [];
    // start the DFS
    const DFS = (node, path)=>{
        path.push(node);
        if(node === end) {
            paths.push(path);
            // a path has been found, return
            return;
        }
        // back track and search for a new unique path
        for (let edge of graph[node]) {
            DFS(edge, [... path]);
        }
    }
    // perform the DFS starting at node 0 and an empty array
    DFS(0, []);
    // return path
    return paths;
};