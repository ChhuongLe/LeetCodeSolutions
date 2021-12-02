/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    // initialize ans array
    let ans = [];
    // iterate through the nums array and permutate it
    for(let i=0; i< nums.length; i++){
        ans.push(nums[nums[i]]);
    }
    //return resulting array
    return ans;
};