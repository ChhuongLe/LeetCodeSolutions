/**
 * @param {number[][]} costs
 * @return {number}
 */

// Requirements: 
    // 2n people for each city
    // must have at least n people per city meaning not everyone can go to city A for example
// in this case a greedy approach can be preformed: 
    // when a problem asks for minimum for something, we can assume a greedy approach
var twoCitySchedCost = function(costs) {
    // sort the array according to ascending order
    let sorted = costs.sort((a,b) => a[0]-a[1]-(b[0]-b[1]));
    // initialize a variable to return 
    let cost = 0;
    // to optimize costs, send first half to city A and the rest to city B
    // n is half the length of the array length
    let n = (sorted.length)/2;
    for(let i = 0; i < n; i++){
        // add the first half to the second half and that will be the total cost
        cost += sorted[i][0]+sorted[i+n][1];
    }
    // return the cost
    return cost;
};