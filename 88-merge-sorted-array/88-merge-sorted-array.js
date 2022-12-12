
Accepted
Jan 20, 2022
JavaScript
Console

Run
Submit
Close
Chhuong Le
Chhuong Le
Dec 12, 2022 11:40

Details
Solution
JavaScript
Runtime
65 ms
Beats
90.80%
Memory
42.4 MB
Beats
30.14%
Click to check the distribution chart
Notes
Write your notes here
Related Tags
Select tags
0/5
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 /*
    IOCE:
        Input: nums1 & nums2 - integer arrays that are sorted in decreasing order
               m - number of elements that should be returned by nums1
               n - number of elements that need to be merged and also the number of elements in nums2
        Output: No output, final sorted array should be stored inside of nums1
        Constraints: Nums1 will never be empty. Nums2 can be empty
        Example: 

        nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 
        nums1 = [1,2,3] nums2 = [2,5,6] splice(ptr1, 0, nums[ptr2]) 
        nums1 = [1,2,2,3] nums = [2,5,6] 

    
    Steps: 
        1. Remove all the 0's from nums1
        2. Set up two pointers
        3. Traverse through until the end of nums2 array
        4. check if there exists a number at ptr1 or if nums1[ptr1] > nums2[pt2] || nums1[ptr1] === undefined 
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);

    let ptr1 = 0, ptr2 = 0;
    // while ptr2 has not hit the end of nums2, continue the traversal
    while (ptr2 < n) {
        if(nums1[ptr1] > nums2[ptr2] || nums1[ptr1] === undefined) {
            nums1.splice(ptr1, 0, nums2[ptr2]);
            ptr1++;
            ptr2++;
        } else {
            ptr1++;
        }
    }
};
