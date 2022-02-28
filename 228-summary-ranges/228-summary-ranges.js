/**
 * @param {number[]} nums
 * @return {string[]}
 */
/*
    IOCE: 
        input: nums - array of integers
        output: ranges - array of strings
        constraints: nums can be empty
                     all values of nums are unique
        edge cases: none
*/

// use two pointers
var summaryRanges = function(nums) {
    let n = nums.length, i = 0, ranges=[];
    // iterate through the nums array 
    for(let j = 1; j <= n; j++){
        // check for a discontinuity
        if(nums[j] !== nums[j-1]+1) {
            if(i === j-1) {
                ranges.push(`${nums[i]}`);
            } else {
                ranges.push(`${nums[i]}->${nums[j-1]}`);
            }
            // change the start point
            i = j;
        }
    }
    return ranges;
};