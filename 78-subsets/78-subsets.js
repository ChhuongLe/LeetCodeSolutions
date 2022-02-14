/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
IOCE: 

    Input: nums - array of integers
    Output: result - array of subsets
    Constraints: subsets must be unique
    Edge Cases: 
*/

// back tracking algorithm
var subsets = function(nums) {
    let res = [];
    let subset = [];
    
    // perform a dfs on the nums array using i as an index
    const dfs = (i) => {
        if(i >= nums.length){
            res.push([...subset]);
            return;
        }
        // decision to include nums[i]
        subset.push(nums[i]);
        dfs(i+1);
        
        // decision to skip nums[i]
        subset.pop();
        dfs(i+1);
    }
    dfs(0);
    return res;
};