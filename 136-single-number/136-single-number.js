/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {};
    
    for(let index in nums){
        let number = nums[index];
        !hash[number] ? hash[number] = 1 : hash[number] += 1;
    }
    
    for (let key in hash){
        if(hash[key] === 1){
            return key;
        }
    }
};