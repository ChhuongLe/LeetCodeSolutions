/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

let graph;
let visiting;
let visited;

const isCyclic = (v) => {
    visiting.add(v);
    // set edge to get the set from the Map
    let edges = graph.get(v);
    console.log(edges);
    if (edges) {
        for (let e of edges) {
            // if visited has e, this is okay as a cycle was not found
            if(visited.has(e)) {
                continue;
            }
            // however if the visiting flag has e, then a cycle is present
            if(visiting.has(e)){
                // return true immediately and exit the function
                return true;
            }
            if (isCyclic(e)) {
                // search further if it is cyclic
                return true;
            }
        }
    }
    // remove from visiting when all neighbors are searched
    visiting.delete(v);
    // add to visited once the search is completed
    visited.add(v);
    // if no cycle was found return false
    return false;
}


const canFinish = (numCourses, prerequisites) => {
    // set it so graph is a new map
    graph = new Map();
    // set up flag parameters to represent whether the node has been visited or not
    visiting = new Set();
    visited = new Set(); 
    
    // iterate through the prerequisites
    // in the array [0,1] -> represents: to take class 0, you need class 1
    for (const [v, e] of prerequisites) {
        // if value (current class) exists in the graph
        if(graph.has(v)) {
            // make an edge that connects it
            let edges = graph.get(v);
            edges.push(e);
            graph.set(v, edges);
        // else if the value is not found
        } else {
            // make a new set in the graph
            graph.set(v,[e]);
        }

   } 

    // iterate through the graph that was created above
    for (const [v,e] of graph) {
        // run it through the function to perform a check for a deadlock
        // if that function returns true
        if(isCyclic(v)) {
            // return false as there was a cycle found
            return false;
        }
    }
    // otherwise return true
    return true;
};