/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
    IOCE:
        Input:
            nums1 & nums2 - array of sorted integers
            m & n - integers that represent the number of elements in respective array
        Output: 
            does not return anything
            final array must be stored in nums1
        Constraint: 
            final result of nums1 === m + n
        Example: 
            nums1 = [1,2,0,0,0] m = 2
            nums2 = [2,5,6] n = 3
            
            Concat both arrays, remove 0's, sort
            
            nums1 = [1,2,2,5,6] m + n = 6 
*/
var merge = function(nums1, m, nums2, n) {
    // remove 0's
    nums1.splice(m);
    let e1 = 0, e2 = 0;
    
    // compare the numbers from nums1 and nums2 and update the order 
    while(nums1.length < m+n) {
        // if the element at nums1 is less than or equal to nums2, move the nums1 pointer
        if(nums1[e1] <= nums2[e2]) {
            e1++;
        } else {
            // otherwise, add the element from nums2 
            nums1.splice(e1, 0, nums2[e2]);
            // increment the pointers to stay up to date
            e1++;
            e2++;
        }
    }
};