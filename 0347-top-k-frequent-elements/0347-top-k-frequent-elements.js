/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // first sort all the numbers in the nums array
    nums = nums.sort();

    // count the frequency how many times the number appears
    let freqMap = new Map();
    for(const num of nums) {
        freqMap.set(num, freqMap.get(num)+1 || 1)
    }

    // hash has all the frequencies of the number and now needs to be sorted
    // convert hash into an array and sort the occurances by weight of occurances
    let sortedArr = [... freqMap.entries()].sort((a,b) => b[1] - a[1]);
    let res = [];
    for(let i = 0; i < k; i++) {
        res.push(sortedArr[i][0]);
    }
    return res;
};