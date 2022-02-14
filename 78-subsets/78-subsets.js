/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
IOCE: 

    Input: nums - array of integers
    Output: result - array of subsets
    Constraints: subsets must be unique [2,3] is the same as [3,2]
    Edge Cases: None to consider at the moment
*/

// back tracking algorithm
var subsets = function(nums) {
    let res = [];
    // initialize an array to have global access to it
    let subset = [];
    
    // perform a dfs on the nums array using i as the index of the current element
    const dfs = (i) => {
        // base case if i is out of bounds
        if(i >= nums.length){
            // subset will be modified, so we push to result
            res.push([...subset]);
            return;
        }
        // perform the back tracking algo
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