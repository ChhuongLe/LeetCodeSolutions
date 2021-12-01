/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* IOCE: 
    Input: nums   -> array
           target -> integer
    Output: array
    Contraints: assume each input has exactly ONE solution
    Edge Cases: None
    
    Example: Input: nums = [2,3,4,5], target = 7
             Output: [0,3] because nums[0] + nums[3] === 7
*/

var twoSum = function(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
};