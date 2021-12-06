/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    let result = [];
    if (nums.length < 3) {
        return result;
    }
    let length = nums.length;
    // sort the numbers in the array in ascending order
    nums.sort((a,b) => a-b);
    
    const twoSum = (i) => {
        let seen = new Set();

        for (let j = i+1; j < length; j++) {
            const target = 0 - nums[i] - nums[j];
            if (seen.has(target)) {
                result.push([nums[i], nums[j], target]);
                while(nums[j] === nums[j+1]) {
                    j++;
                }
            }
            seen.add(nums[j]);
        }
    }
    
    for(let i = 0; i < length; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i === 0 || nums[i-1] !== nums[i]) {
            twoSum(i);
        }
    }
    return result;
};

