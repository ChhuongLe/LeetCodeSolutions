/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    // initialize a result array to return
    let res = [];
    // initialize a queue with starting point at 0
    let queue =[[0]];
    // iterate through the graph and valid paths 
    while(queue.length > 0) {
        // pop the first element from the queue and store it into curr
        let curr = queue.shift();
        // store the last element in curr to be used to compare if the result has been achieved
        let last = curr[curr.length-1];
        // check if the goal has been achieved 
        if (last === graph.length-1) {
            res.push(curr);
            continue;
        }
        // otherwise continue the search
        for(let i = 0; i < graph[last].length; i++) {
            let newArr = new Array(...curr, graph[last][i]);
            queue.push(newArr);
        }
    }
    return res;
};