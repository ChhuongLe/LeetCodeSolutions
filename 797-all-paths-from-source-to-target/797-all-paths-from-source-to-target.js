/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    // initialize a variable to store the resulting paths
    let res = [];
    // always start at 0 in the graph
    let queue = [[0]];
    // start pulling from the queue
    while(queue.length > 0) {
        let curr = queue.shift();
        // set up a variable to hold the last element in the path
        let last = curr[curr.length-1];
        // set up a detection to see if the last element in the path is the goal node
        if (last === graph.length-1) {
            res.push(curr);
            continue;
        }
        // if there are more paths, create new arrays 
        for(let i = 0; i < graph[last].length; i++) {
            let newArr = new Array(...curr, graph[last][i]);
            queue.push(newArr);
        }
    }
    // return the result in the end
    return res;
};