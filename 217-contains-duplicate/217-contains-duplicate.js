/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
    Example:
        nums = [1,2,3,3]
        
        since there are duplicates of 3, return true
        
        nums = [1,2,3]
        
        since there are no duplicates, return false
*/

var containsDuplicate = function(nums) {
    let isUnique = new Set();
    
    for(let i = 0; i < nums.length; i++){
        let curr = nums[i];
        if(!isUnique.has(curr)) {
            isUnique.add(curr);
        } else {
            return true;
        }
    }
    return false;
};