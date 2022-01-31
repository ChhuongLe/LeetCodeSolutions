/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // write a funttion that will reverse the nums array according to the parameters given
    const reverse = (start, end) => {
        while(start < end) {
            let temp = nums[start];
            nums[start++] = nums[end];
            nums[end--] = temp;
        }
    };
    k %= nums.length;
    // reverse the entire nums array
    reverse(0, nums.length-1);
    // reverse the first k elements 
    reverse(0, k-1);
    // reverse the rest of the array
    reverse(k, nums.length-1);
};