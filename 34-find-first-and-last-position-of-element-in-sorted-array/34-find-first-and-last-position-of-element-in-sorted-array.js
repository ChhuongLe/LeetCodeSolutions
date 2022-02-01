/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // binary search
    let l = 0;
    let r = nums.length-1;
    // find where the first index if found
    while (l < r) {
        let mid = Math.floor((l+r)/2);
         if(target > nums[mid]){
             l = mid + 1;
         } else if (target <= nums[mid]) {
            r = mid;
         }
    }
    // after looping through the array and a match is not found
    if(nums[l] !== target) {
        // return default
        return [-1,-1];
    }
    // store the first index found
    let start = l;
    // reset the right pointer
    r = nums.length-1;
    // iterate through the array again and perform the binary search
    while(l < r) {
        let mid = Math.floor((l+r)/2);
        if (nums[mid] <= target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    // initialize the next index to store
    let end = 0;
    if(nums[l] === target) {
        end = l;
    } else {
        end = l-1;
    }
    // return the two end points
    return [start, end];
};