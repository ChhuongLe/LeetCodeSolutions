/**
 * @param {number[]} nums
 * @return {number}
 */

/*
IOCE:
        Input: nums - array of integers
        Output: result - integer
        Constraints: nums is only comprised of 1's and 0's 
        Edge Cases: None to consider at the moment

    Example:

        input: nums = [0,1,0]
        output: 2

        longest contiguous subarray with equal 0's and 1's
        
        [0, 1] or [1, 0] have both length 2

        so therefore output is 2

    Example 2: 
        input: nums = [0, 0, 1, 0 , 1]

        longest subarray: [0 , 1, 0, 1] -> length is 4

        output is 4
*/
var findMaxLength = function(nums) {
    // use a hash to store the index and value of the found sum and where it was located
     let hash = {};
    // initialize a sum variable
    let sum = 0;
    // initialize a longestSubArr variable to keep track of the length
    let longestSubArr = 0;
    // iterate through the array of nums
    for(let i = 0; i < nums.length; i++) {
        // if the current value is 0, decrement sums, otherwise increment sums
        nums[i] === 0 ? sum-- : sum ++;
        // if the hash has not seen this sum yet, save the index it was found 
        if(hash[sum] === undefined) hash[sum] = i;
        // if the sum is found in the hash, we can assume that that there are an equal number of 1's and 0's in the subarray
        if(hash.hasOwnProperty(sum)) longestSubArr = Math.max(longestSubArr, i - hash[sum]);
        // if sum hits 0, this would mean everything from the start of the array to the current position has equal 1's and 0's
        if(sum === 0) longestSubArr = Math.max(longestSubArr, i + 1);
    }
    // return the longestSubArr
    return longestSubArr;
};