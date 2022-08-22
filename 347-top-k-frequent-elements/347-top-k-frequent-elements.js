/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
    use a map to store the num as key and the number of times it appears as the value
    sort the map and store the values into an array
    traverse through the array and return the k most frequent elements
*/
var topKFrequent = function(nums, k) {
    let res = [], map = new Map();
    
    // traverse through the nums array
    for (const num of nums){
        // set the key value pairs
        map.set(num, map.get(num)+1 || 1);
    }
    
    // sort them and store into an array in most frequent order
    let sortedArr = [...map.entries()].sort((a,b) => b[1] - a[1]);
                                            
    // store the k most frequent entries into res
    for(let i = 0; i < k; i++) {
        res.push(sortedArr[i][0]);
    }
    
    // return the final result
    return res;
};