/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
    IOCE:
        Input: nums - array of integers, target - integer
        Output: res - integer
        Constraints: 
            Integers in nums are all unique
            nums is already sorted in ascending order
        Edge Cases: 
            Nums has only one number in the array 
            Nums may not contain target number
            
    Algorithm: 
        nums is already presorted. We can preform a binary search
        
*/
var search = function(nums, target) {
    if(nums.length === 1 && nums[0] === target) {
        return 0;
    }
    // set up two pointers for the binary search
    let l = 0, r = nums.length-1;
    
    while(l <= r) {
        // find the midpoint of the array
        let mid = l + Math.floor((r-l)/2);
        if(nums[mid] === target){
            return mid;
        }
        if(nums[mid] > target) {
            r = mid-1
        } else {
            l = mid+1;
        }
    }
    // if the loop ends without finding the target, return -1
    return -1;
};