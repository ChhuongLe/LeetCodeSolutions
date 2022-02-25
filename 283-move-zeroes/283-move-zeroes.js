/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let ctr = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) {
            nums.splice(i,1);
            i--;
            ctr++;
        }
    }
    
    for(let i = 0; i < ctr; i++) {
        nums.push(0);
    }
    return nums;
};