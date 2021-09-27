/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/* IOCE: 
    Input: integers (m and n) m = number of rows, n = number of columns
    Output: integer; represents number of unique paths the robot can take to reach the bottom right corner
    Constraints: 1 <= m and n <= 100
    Edge Cases: n can be less than 1? 
*/
var uniquePaths = function(m, n) {
    // if either of the columns or rows is equal to 1
    if (n === 1 || m === 1) {
        // return 1 right away as there will be only 1 unique path
        return 1;
    } 
    // set up variable for dynamic programming
    const dp = Array(m).fill(Array(n).fill(1));
    
    // iterate through the matrix
    for(let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // for each cell, add to the dynamic array
            dp[i][j] = dp[i-1][j]+dp[i][j-1];
        }
    }
    // return the number of paths
    return dp[m-1][n-1];
};