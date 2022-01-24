/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
IOCE:
    Input: nums - array of integers, target - integer
    Output: Array of integers
    Constraints: nums will always have a length >= 2
    Edge Cases: None to consider at the moment
*/
var twoSum = function(nums, target) {
    let res = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i]+nums[j] === target) {
                res.push(i);
                res.push(j);
            }
        }
    }
    return res;
};