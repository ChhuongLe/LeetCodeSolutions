/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    // iterate through the nums array with i as a pointer
    for (let i = 0; i < nums.length; i++) {
        // start a counter at 0 after each iteration
        let ctr = 0;
        // use a second pointer to check thorugh the rest of the array
        for (let j = 0; j < nums.length; j++) {
            // check if the statement is true
            if (nums[i] > nums[j]){
                // if it is, increment the counter
                ctr++;
            }
        }
        // push result into result array
        result.push(ctr);
    }
    // return the result
    return result;
};