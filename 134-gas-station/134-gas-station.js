/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

/*
    IOCE:
        Input: Gas - Array of integers, cost - Array of integers
        Output: Integers
        Constraints: gas and cost are of length n
        Edge Cases: If no path is found, return -1
*/
/*
Example:
    Keep track of total and starting position
    if total ever drops below 0, move the starting position to the next position
    gas  = [ 1, 2, 3,4,5]
    cost = [ 3, 4, 5,1,2]
    diff = [-2,-2,-2,3,3]

    total = -2 < 0
    reset total to 0
    total = -2 < 0
    reset total to 0
    total = -2
    reset total to 0
    total = 3 >= 0 check if this position can loop back to itself
    total = 3 + 3 = 6 >= 0 
    Since we know that sum(gas) has to equal sum(cost) for this to work and that there is only ONE unique solution, this is the solution

    since we only iterated through the array once, run time is O(N) where N is the size of the array
*/
const sum = (items) => {
    let summation = 0;
    for(const elements of items) {
        summation += elements;
    }
    return summation;
}

var canCompleteCircuit = function(gas, cost) {
    // compare the sum of the gas to the sum of the cost
    if (sum(gas) < sum(cost)) {
        // if the sum of the gas is less than cost, no solution can be found
        return -1;
    }
    // keep track of the total 
    let total = 0;
    // keep track of the index
    let index = 0;
    // iterate through each of the elements in gas and cost (gas and cost are both length n)
    for(let i = 0; i < gas.length; i++) {
        // store the difference 
        total += (gas[i] - cost[i]);
        // if total is negative 
        if(total < 0) {
            // reset
            total = 0;
            // increment index
            index = i + 1;
        }
    }
    return index;
};


