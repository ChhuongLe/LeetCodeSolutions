/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    IOCE:
        input: nums - array of integers
        output: result - integer
        constraints: 
            n will always have an element 
            nums can contain positive or negative integers
            majority element will always exist (appears more than n/2 times)
        edge cases: none to consider
*/
// Hash table method
var majorityElement = function(nums) {
    // initialze a hash table
    let hash = {};
    // iterate through the nums array 
    for (let num of nums){
        // if it is the first time seeing the number 
        if(!hash[num]){
            // add it to the hash
            hash[num] = 1;
        } else { // if its the next time seeing a number
            // increment the count
            hash[num]++;
        }
    }
    // search for the largest value in the hash
    let result = 0;
    let max = 0;
    for(let key in hash) {
        console.log(key)
        if(hash[key] > max){
            max = hash[key];
            result = key;
        }
    }
    // return it
    return result;
};