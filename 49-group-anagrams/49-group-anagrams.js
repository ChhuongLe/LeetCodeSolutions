/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
    example:
    ["car", "rac", "tan", "bat", "nat"]
    
    traverse through the array
    sort every word to alphabetical order
    ["acr", "acr", "ant", "abt", "ant"]
    check each string for identical strings 
    store each index into a hash
    
    hash = {
        "acr": [0,1],
        "ant": [2,4],
        "abt": [3]
    }
    
    traverse through the hash
    update the result array with anagrams in sub arrays
    result = [[car, rac], [tan, nat], [bat]]
    
    return result
*/
var groupAnagrams = function(strs) {
    let sortedStrs = [], hash = {}, result = [];
    // traverse through the strs array
    for(const words of strs) {
        sortedStrs.push(words.split('').sort().join(''));
    }
    
    //traverse through the sortedStrs array 
    for(let i = 0; i < sortedStrs.length; i++) {
        let curr = sortedStrs[i];
        // check if the hash has the current word
        if(!hash[curr]) {
            hash[curr] = [i];
        } else {
            hash[curr].push(i);
        }
    }
    // hash contains all the indexes that are anagrams
    for(const key in hash){
        let subArr = [];
        for(const idx of hash[key]) {
            subArr.push(strs[idx])
        }
        result.push(subArr)
    }
    return result;
};