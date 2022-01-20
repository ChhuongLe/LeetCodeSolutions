/**
 * @param {string} s
 * @return {string}
 */
/*
IOCE: 
    Input: String 
    Output: String
    Constraints: 1 <= s.length <= 1000
                 s only consists of english letters
    Edge Cases: None
    
    Example: 
        "abcdeffedcb"
        
        bcdeffdecb is the longest palindromic substring
        
    can use dynamic programming: O(N^2)
*/
var longestPalindrome = function(s) {
    // check if s is of length 1, constraints mention that s will always be >= 1
    if (s.length === 1) {
        return s;
    }
    // initialize a string to store the longest palindromic string
    let lps = '';
    // initialize a 2d dp matrix and fill it with false boolean
    let dp = Array(s.length).fill(0).map(() => Array(s.length).fill(false));
    
    // fill in the array for locations at dp[i][i], always true
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }
    
    // handle for 2 character strings
    for (let i = 0; i < s.length; i++) {
        // in the example ff is at dp[5][6], in this case dp at this location would be true
        if(s[i] === s[i+1]) {
            dp[i][i+1] = true;
        }
        // if this  is true, then change the longest substring from a single string to a double string
        if (dp[i][i+1]) {
            lps = s.substring(i, i+2);
        }
    }
    
    // three or more character strings
    for (let i = s.length-1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) {
                lps = lps.length < (j - i+1) ? s.substring(i, j+1) : lps;
            }
        }
    }
    // return the final substring
    return lps;
};