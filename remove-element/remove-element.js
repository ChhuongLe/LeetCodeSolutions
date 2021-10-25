/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/*
    IOCE:
        1. Input: Array and Integer
        2. Output: Array with selected integer removed
        3. Contraints: 0 <= nums.length <= 100
                       0 <= nums[i] <= 50
                       0 <= val <= 100
        4. Edge Cases: None
*/
var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0 ; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};