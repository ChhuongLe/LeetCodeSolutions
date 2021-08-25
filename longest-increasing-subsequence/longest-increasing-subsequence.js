/**
 * @param {number[]} nums
 * @return {number}
 */

/* IOCE:
    input: array of integers
    output: length of longest subsequence 
    constraints: none
    edge cases: none
*/

/* can use dynamic programming to update max length */

// O(n^2) solution
var lengthOfLIS = function(nums) {
    // set up dyanmic array filled with 1's 
    // going to perform a max comparison array
    let dp = new Array (nums.length + 1).fill(1);
    
    // initialize max to start at 0
    let max = 0;
    // iterate through the nums array
    for (let i = 0; i < nums.length; i++) {
        // compare throughout the array 
        for (let j = 0; j < i; j++) {
            // if the next number is greater
            if(nums[i] > nums[j]) {
                // increase dp at i by 1
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
        // compare dp at i to current max
        // if current dp is larger, update max
        max = Math.max(max, dp[i]);
    }
    // return max once iterations are complete
    return max;
};
