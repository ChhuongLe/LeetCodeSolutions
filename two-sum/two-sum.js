/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                result = [i,j];
                return result;
            }
        }
    }
};