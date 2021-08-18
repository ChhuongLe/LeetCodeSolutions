/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Return the INDICIES of the numbers that add to target
// Assume there's only one solution
// Cannot use the same element twice 

/* IOCE: 
    Input: array of numbers and and integer
    Output: array of numbers
    Constraints: Only ONE valid answer
    Edge Cases: NONE
*/

var twoSum = function(nums, target) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let leftNum = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            let rightNum = nums[j];
            if(leftNum + rightNum === target) {
                return [i,j];
            }
        }
    }
};