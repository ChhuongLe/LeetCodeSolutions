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
    // iterate through nums
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i] || target < nums[i]) {
            return i;
        }
    }
    return nums.length;
};