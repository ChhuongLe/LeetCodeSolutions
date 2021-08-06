/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr1 = nums.slice(0,nums.length);
    let arr2 = nums.splice(0,nums.length);
    
    let result = arr1.concat(arr2);
    
    return result;
};