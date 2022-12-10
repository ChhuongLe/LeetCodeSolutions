/**
 * @param {number[][]} costs
 * @return {number}
 */

 /*
    Need to have 2n people flying to city a and city b

    IOCE: 
        Input - costs array
        Output - total cost to send people out to ciies A and B
        Constraints - costs.length will always be even
                      prices will always be positive
        edge cases: none

    Steps:
        1. Sort the costs according to cost differences
            1a. [[10,20], [30,200], [400,50], [30,20]] 
                [[30,200], [10,20], [30,20], [400,50]] sorted according to costs
        2. traverse through half the array and add the costs for city A
            2a. while doing this, add the other half as the cost for city B
        4. return total cost
 */
var twoCitySchedCost = function(costs) {
    // sort the costs according to price difference 
    costs.sort((a,b)=>((a[0]-a[1]) -(b[0]-b[1])))

    let total = 0, length = costs.length/2;
    // traverse through the sorted costs array and add the halves
    for(let i = 0; i < length; i++) {
        total += costs[i][0] + costs[i+length][1];
    }

    return total;
};
