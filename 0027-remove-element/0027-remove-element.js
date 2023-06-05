/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/*
    IOCE: 
        Input: 
            nums - array of integers
            val - target integer to remove from nums IN PLACE
        Output: k - integers representing how many elements are left in the array
        Constraints: none
        Example: 
            [1,2,3,4,5,5,5] val = 5
            [1,2,3,4] k = 4
*/
var removeElement = function(nums, val) {
    let k = 0;
    
    // traverse through the nums array
    for(let i = 0; i < nums.length; i++) {
        // count the number of times nums[i] !== k
        if(nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }
    return k;
};