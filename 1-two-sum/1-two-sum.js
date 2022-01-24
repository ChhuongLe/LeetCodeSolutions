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
    // create an object to store the key value pairs 
    let numObj = {};
    // iterate through the nums array
    for(let i = 0; i < nums.length; i++) {
        // store the number into currNum
        let currNum = nums[i];
        // store the index as a value for the key at currNum
        numObj[currNum] = i;
    }
    // now iterate through nums 
    for(let i = 0; i < nums.length; i++) {
        // find the difference between target and the current number being viewed
        let diff = target-nums[i];
        // find if the difference is located in the object and if the current number is unique 
        if(numObj.hasOwnProperty(diff) && i !== numObj[diff]) {
            // if it is, return the 2 numbers that sum up to it
            return [i, numObj[diff]];
        }
    }
};