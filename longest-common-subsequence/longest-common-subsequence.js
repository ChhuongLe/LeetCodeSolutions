/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

/* High Level understanding: 
    1. Given 2 strings 
    2. Find longest string of common letters
*/

/* IOCE: 
    Input: 2 strings 
    Output: Integer of common letters found
    Constraints: None
    Edge Cases: None
*/

var longestCommonSubsequence = function(text1, text2) {
    // use dynamic programming method
    // use the longest string to represent the size of the dynamic array
    let dp = [];
    let m = text1.length;
    let n = text2.length;
    
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n+1).fill(0);
    }
    
    // start at 1
    // compares nothing between the two strings at 0
    for (let i = 1; i <= m; i++){
        for (let j = 1; j <= n; j++) {
            // if the two characters do not match
            if(text1.charAt(i-1) !== text2.charAt(j-1)) {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            } else {
                dp[i][j] = dp[i-1][j-1] + 1;
            }
        }
    }
    return dp[m][n];
};1