/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // pass all nums into a hash for quick referencing
    let hash = {};
    let i = 0;
    for (const num of nums){
        hash[num] = i;
        i++;
    }

    // traverse through the nums array and find the elementt that corresponds to the difference.
    let diff = 0;
    let res = [];
    i = 0;
    for (const num of nums) {
        diff = target - num;
        if(hash[diff] && i !== hash[diff]){
            res.push(i, hash[diff])
            break;
        }
        i++;
    }
    return res;
};