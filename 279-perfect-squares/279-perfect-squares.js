/**
 * @param {number} n
 * @return {number}
 */

/*
    IOCE: 
        Input: n - integers
        Output: res - integer
        constraints: n is always a valid number
        edge cases: none
*/
const numSquares = (n) => {
    // set up a dynamic programming array
    const dp = [0];
    // perform the iteration starting at 1
    for (let i = 1; i <= n; i++) {
        // reference for comparison
        dp[i] = Infinity;
        // find where a square can be used
        for(let j = 1; j*j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
        }
    }
    return dp[n];
};