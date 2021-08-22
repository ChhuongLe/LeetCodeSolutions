/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* IOCE:
    input: array of nums
    output: array of products exlcuding current element
    constraints: must be O(n) and cannot use / operator
    edge cases: numbers must be 32-bit ints only
*/

/* example approach:
    nums = [1, 2, 3, 4] 
    ans output should be [24, 12, 8, 6]
    
    if we iterate through the left to right of nums
    left = [1, 1, 2, 6] (everything to the left of each element)
                        (left of 1 is nothing, so default to 1)
                        (everything to the left of 4 is 2*3*1 = 6)
                        
    iterate right to left of nums
    right = [24, 12, 4, 1] (everything to the right of 4 is nothing so                                 default to 1)
                            (and everyhting to the right of 1 is 2*3*4 =                                24)
    
    now if we multiple left[i] * right[i] 
    ans = [24, 12, 4, 6] which is what we want
*/
var productExceptSelf = function(nums) {
    let ans = [];
    let left = [];
    let right = [];
    
    left[0] = 1;
    right[nums.length-1] = 1;
    
    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i-1] * left[i-1];
    }
    
    for (let j = nums.length-2; j > -1; j--) {
        right[j] = nums[j+1] * right[j+1];
    }
    
    // console.log("left: ", left);
    // console.log("right: ", right);
    
    for (let k = 0; k < nums.length; k++) {
        ans[k] = left[k] * right[k];
    }
    return ans;
};