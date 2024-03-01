/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let hash = {};
    // traverse through the nums array
    for(let num of nums) {
        if(!hash[num]) hash[num]=1;
        else hash[num]++;
    }

    // check if the number of operations is possible to get to 0
    let steps = 0;
    let keys = Object.keys(hash);

    for(const i of keys) {
        // if a count is only 1, then it is impossible to empty return -1
        if(hash[i] === 1) return -1; 
        else if(hash[i] % 3 === 0) {
            steps += hash[i]/3;
        } else if(hash[i] % 3 === 1) {
            steps += ((hash[i] - 4)/3) + 2;
        } else if(hash[i]% 3 === 2) {
            steps += ((hash[i] - 2)/3) + 1;
        } else {
            continue
        }
    }
    return steps;
};