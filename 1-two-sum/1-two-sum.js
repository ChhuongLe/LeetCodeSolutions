/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // use hash to store number and index
    let hash = {};
    for (let i = 0; i < nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = i;
        }
    }
    // hash of nums and element number is now initialized
    // iterate again and find if the diff is present in the hash
    let diff = 0;
    let res = [];
    for (let i = 0; i < nums.length; i++){
        diff = target - nums[i];
        if(hash[diff] && i !== hash[diff]){
            res.push(i, hash[diff]);
            break;
        }
    }
    return res;
};