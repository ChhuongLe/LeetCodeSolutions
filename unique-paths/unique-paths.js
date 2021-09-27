/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // if either row or column is of lenght 1
    if (m === 1 || n === 1) {
        // return 1 as there will only be on unique path
        return 1;
    }
    // initialize the dynamic array and make it of size m x n
    // fill it with 1's
    const dp = Array(m).fill(Array(n).fill(1));
    
    // iterate through the matrix starting at 1,1 of the matrix
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // add the cells
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    // return the last element
    return dp[m-1][n-1];
};