/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 /*
    Use binary search to achieve O(log n) runtime complexity

    example:
    [4,5,6,7,0,1,2] tartget = 0

    start at middle: 7
    0 < 7 can search [4,5,6] or [0,1,2]
    check left side
    0 < 4 left side is out since 4 would be the smallest number due to pre-sorting
    check middle of right side
    0 < 1 decrement position
    0 == 0

    return element index
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        // initialize the middle index
        let mid = Math.floor((l+r)/2);
        
        // if middle element is the target, return
        if(nums[mid] === target) {
            return mid;
        }

        // check if left side of the array is sorted
        if(nums[l] <= nums[mid]) {
            // check if the target is greater than the middle element or if it is less than the first element
            if (target > nums[mid] || target < nums[l]) {
                // move left pointer to the right portion
                l = mid + 1;
            } else {
                // otherwise move the r pointer into the left portion of the array
                r = mid - 1;
            }
        // check right side portion
        } else {
            // check if the target is less than the middle element or if target is greater than the last element in the right portion's array
            if (target < nums[mid] || target > nums[r]) {
                // move the right pointer towards the left side
                r = mid - 1;
            } else {
                // otherwise move the left pointer 
                l = mid + 1;
            }
        }
    }

    // if the iteration ends without find the target, return -1
    return -1;
};
