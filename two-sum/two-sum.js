/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// hash table approach
var twoSum = function(nums, target) {
    // set variable called numObj to be an empty hash table
    let numObj = {};
    // iterate through the nums array
    for (let i = 0; i < nums.length; i++){
        // set the key to equal the number in the array
        let thisNum = nums[i];
        // set the value to be the index in the nums array
        numObj[thisNum] = i;
    }
    // Now iterate through the nums array and compare the difference to the hash map
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        // if the difference exsists inside the hash map, return it
        if(numObj.hasOwnProperty(diff) && i !== numObj[diff]) {
            return [i, numObj[diff]];
        }
    }
};