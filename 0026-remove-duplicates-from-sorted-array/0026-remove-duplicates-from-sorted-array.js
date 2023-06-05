/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    IOCE:
        Input: nums - array of integers
        Output: k - integer representing the final number of unique integers
        Constraints: no repeating integers, must be sorted in non-decreasing order
        Example:
            nums = [1,2,2,3,4,5,5,5]
            
            return k = 5 nums = [1,2,3,4,5]
*/
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i+1] === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};