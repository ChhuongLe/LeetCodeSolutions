/**
 * @param {number} n
 * @return {number}
 */

/* IOCE:
    Input: Positive integer
    output: number of ways to climb the stairs
    contraints: input can only be positive
    edge cases: none
*/ 

// using dynamic programming (bottom up approach)
var climbStairs = function(n) {
    // initialize array
    // will store subproblems
    let result = Array(n+1);
    // base case how many ways to climb 0 steps, 1
    result[0] = 1;
    // how many ways to climb 1 steps, 1
    result[1] = 1;
    for (let i = 2; i <= n; i++) {
        // utilizes previous results to get next result
        result[i] = result[i -1] + result[i-2];
    }
    return result[n];
};
