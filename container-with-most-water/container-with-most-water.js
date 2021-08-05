/**
 * @param {number[]} height
 * @return {number}
 */
//O(n^2) - Too slow!
// var maxArea = function(height) {
//     let max = 0;
//     for(let i = 0; i < height.length; i++) {
//         // start at the next element
//         for (let j=i+1; j< height.length; j++) {
//             // determine the minimum height to be used as the water area cannot be slanted
//             let min = Math.min(height[i], height[j]);
//             max = Math.max(max, min*(j-i));
//         }
//     }
//     return max;
// };

// Try O(n) 
// Tallest Line is the one we want to deal with
// Small line is limiting factor - want to move this around and calculate with static line
var maxArea = function(height) {
    // Start at the smallest possible value so it can be updated later with a value larger than it
    let  max = Number.MIN_VALUE;
    // Start at beginning of array
    let i = 0;
    // And end of array
    let j = height.length-1;
    // while i still has not crossed j, continue
    while (i < j) {
        // let min be the smallest of the two points
        let min = Math.min(height[i], height[j]);
        // set max to be the largest of the comparisons
        max = Math.max(max, min*(j-i));
        if(height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
};