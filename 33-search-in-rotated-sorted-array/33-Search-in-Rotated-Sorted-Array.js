/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 /*
    IOCE: 
        Input: nums - array of integers
        Output: index - integer representing the index of where the target was found
                        (must return -1 if the target is not found in the array)
        Constraints: nums will never be empty
                     all values of nums will be unique
                     nums is possibly rotated and in ascending order
        Examples: 
            [4,5,6,7,0,1,2], target = 0
            should return 4 since index 4 is where the target is located

            [4,5,6,7,0,1,2] target = 3
            should return -1 since the target cannot be found in the array nums

    Algorithm: Binary search
        1. set up pointers for the left and right side
        2. traverse through the nums array 
            2a. initialize a midpoint
            2b. check if mid is equiv to the target
                2ba. if it is return the index
            2c. check if the the target can be found in either the left or right side of the array
        3. If the traversal comes out to be unsucessful, return -1
 */
var search = function(nums, target){
    let l = 0, r = nums.length-1;

    while(l <= r) {
        let mid = Math.floor((l+r)/2);
        // check if the target has been found
        if(target === nums[mid]){
            return mid;
        }
        
        // check if the left side of the array is sorted 
        if (nums[l] <= nums[mid]){
            // check if the target can be located in the left side
            if(nums[l] <= target && target <= nums[mid]){
                // reset the right pointer
                r = mid - 1;
            } else {
                // otherwise it will be in the right side and re-set the left side 
                l = mid + 1;
            }
            // otherwise the right side is sorted
        } else {
            // check if the target can be found in the right side of the array
            if(nums[mid] <= target && target <= nums[r]){
                l = mid + 1
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};
