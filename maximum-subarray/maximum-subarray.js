/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = Number.MIN_SAFE_INTEGER;
    
    for (let left = 0; left < nums.length; left++) {
        let subsectionSum = 0;
        for (let right = left; right < nums.length; right++) {
            subsectionSum += nums[right];
            
            sum = Math.max(sum, subsectionSum);
        }
    }
    
    return sum;
};