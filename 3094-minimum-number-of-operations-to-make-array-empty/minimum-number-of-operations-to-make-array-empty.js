/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperationsBruteForce = function(nums) {
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

const minOperations = (nums) => {
    let map = new Map();

    // count frequencies of each element
    for(const num of nums) {
        if(!map.has(num)) map.set(num, 1);
        else map.set(num, map.get(num)+1);
    } 

    let res = Array.from(map.values());
    let steps = 0;
    for(const freq of res) {
        // if there only 1 value of any number, return -1
        if(freq === 1) return -1;

        // calculate the number of operations of type 2
        steps += Math.floor(freq/3);

        // if 1 or 2 elements are left, perform type 1 operation
        if(freq % 3 > 0) {
            steps++;
        }
    }
    return steps;
}