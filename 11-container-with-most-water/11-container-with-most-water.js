/**
 * @param {number[]} height
 * @return {number}
 */

/*
    Find max amount of water a container can store
    
    Algorithm: use two pointers 
        1. traverse through the height array
            1a. first pointer is in the beginning of the array, second is at the end of the array
        2. calcualte the area
            2a. compare the area to the previous if a previous max was found
        3. move the pointer if the height on one side is shorter than the other side
        4. continue traverseing until the two pointers meet
        5. return the final max
*/
var maxArea = function(height) {
    let max = 0, l = 0, r = height.length-1;
    // traverse while left has not met right yet
    while(l < r) {
        // compare the max to the current area calculated
        max = Math.max(max, (r-l)*Math.min(height[l], height[r]))
        // move the limiting factor up one or down one
        height[l] < height[r] ? l++ : r--;
        // compare the max vs the area recently calculated
    }
    // return the max
    return max;
};