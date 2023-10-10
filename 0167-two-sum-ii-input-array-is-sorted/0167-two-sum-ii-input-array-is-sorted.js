/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

 // update from using hash
 // use two pointers, one from the start, one from the end
    // check if the sum is equal to the target
    // if sum is larger, that means that the right number is too large
        // decrement right
    // if sum is smaller, left number is too little
        // increment left
// return left and right
var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length-1;

    while(l < r) {
        let sum = numbers[l] + numbers[r];

        if(target === sum){ 
            return [l + 1, r + 1];
        }

        if(sum > target) {
            r--;
        } else {
            l++;
        }
    }
};