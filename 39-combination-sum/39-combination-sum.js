/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    
    // use a backtracking tree 
    const dfs = (i, curr, sum) => {
        // if the sume ever reaches target
        if(sum === target) {
            // push a copy of the current array into res
            res.push([...curr]);
            return;
        }
        // if i reaches the end of candidates or if the sum is greater than target
        if (i >= candidates.length || sum > target){
            // break out
            return;
        }
    // first path of decision tree: include candidates[i]
        // take candidates[i] and add it to curr array
        curr.push(candidates[i]);
        // continue to dfs(i, curr, sum + candidates[i]) pass in the same candidate value, the current curr array, and the new sum
        dfs(i, curr, sum + candidates[i]);
    // second path: do not include candidates[i]
        // clean up the curr array and pop the candidate we cannot include
        curr.pop();
        // continue the dfs at i+1
        dfs(i+1, curr, sum);
    }
    // initialize the backtracking with index 0, empty array, and sum = 0
    dfs(0,[],0);
    // return the final result
    return res;
};