/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    // initialize a result array to return 
    let result = [];
    // first sort the nums array in ascending order
    nums.sort((a,b) => a-b);
    // iterate through the sorted nums array and search for the target's index
    for(let i = 0; i < nums.length; i++) {
        // if a number is equal to the target
        if(nums[i] === target) {
            // push the index into the result array
            result.push(i);
        }
    }
    // return result
    return result;
};