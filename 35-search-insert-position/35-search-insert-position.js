/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* IOCE:
    Input: Array
    Output: Integer
    Constraints: None
    Edge Cases: None
*/
var searchInsert = function(nums, target) {
    // iterate through nums, using binary search methods
    // initialize values for the start and end pointers
    let start = 0;
    let end = nums.length-1;
    // continue iterating through the nums array until start and end meet
    while(start <= end) {
        // set the mid point
        let mid = Math.floor((start+end)/2);
        // if the target is equivelent to the mid point
        if(target === nums[mid]) {
            // return the index
            return mid;
          // otherwise, shift search indexes accordingly  
        } else if (nums[mid] > target) {
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    // if no index is found, place the value at the end of the array of nums
    return start;
};