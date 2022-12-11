/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /*
    IOCE:
        Input : nums - Array of integers
        Output: result - array of integers
        Constraints: nums array will never be empty
                     nums will only contain positive numbers and 0
        Edge Cases: None
    
    Example: [1,2,3] = 123 Next lexicographically grerater prem is 132 = [1,3,2]

    Steps:
        1. Traverse through the array starting at the end of the array
            1a. Attempt to find a target to swap (right side >? left side)
            1b. Check if the right side is greater than the left side
                1ba. if it is, perform a swap
                1bb. if not, continue traversal
            1c. if a swap is performed, the right side of the array will now have to be sorted to be lexographically correct
 */


var nextPermutation = function(nums) {

    const findNextLarge = (idx) => {
        for(let i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) return i;
        }
    }   

    const sliceSort = (idx) => {
       let start = idx, end = nums.length-1;
        while(start < end) {
            swap(start, end)
            start++;
            end--;
        }
    }

    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // begin the traversal starting at the end of the array
    for (let i = nums.length - 2; i >= 0; i--) {
        // if the number to the right is larger than the number to the left
        if(nums[i] < nums[i+1]) {
            // find the next larger number that is near it
            const j = findNextLarge(i);
            // perform a swap
            swap(i,j);
            // sort the array from the location of the swap all the way to the right
            sliceSort(i+1);
            return;
        }
    }

    // otherwise if the array is sorted in descending order already, reverse it and return
    nums.reverse();
};
