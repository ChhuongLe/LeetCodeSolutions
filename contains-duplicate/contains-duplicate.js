/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*IOCE:
    Input: array of integers
    Output: boolean
        True - If any values appear more than once
        False - If all values are unique
    Constraints: Nonee
    Edge Cases: None */

/* Use a hash:
    [1,2,3,1,]
    
    Hash = {
            "1": 2,
            "2": 1,
            "3": 1 
            }
*/
var containsDuplicate = function(nums) {
    // Initialize a hash that will store each of the numbers in the "nums" array
    hash = {};
    // Iterate through the nums array 
    for (let i = 0; i < nums.length; i++) {
        // if the key is unique, mark it with 1
        // at anytime, if the key found is not unique, return true
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            return true
        }
    }
    // otherwise return false
    return false;
};