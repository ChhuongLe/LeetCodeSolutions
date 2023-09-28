/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // initialize a hash or a set 
    let uniqueSet = new Set();
    // traverse through the array
    for (const num of nums) {
        // if the set does not contain the number
        if(!uniqueSet.has(num)) {
            // add it to the set
            uniqueSet.add(num)
        } else {
            // if it does exist return true
            return true;
        }
    }
    // return false if the loop ends
    return false
};