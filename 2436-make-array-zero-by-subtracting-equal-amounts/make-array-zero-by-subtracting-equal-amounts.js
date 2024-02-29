/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const len = nums.length;
    // sort the integers in ascending order
    nums.sort((a,b)=> a-b);
    // initialize number of steps
    let steps = 0;

    // traverse through the array
    for(let i = 0; i < len; i++) {
        // if nums at i is 0, skip the traversal
        if(nums[i] === 0) {
            continue;
        }
        // increment steps
        steps++;
        // subtract current element from all subsequent positives as it is already sorted
        for(let j = i + 1; j < len; j++) {
            nums[j] -= nums[i]
        }
    }
    return steps;
};