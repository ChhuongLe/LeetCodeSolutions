/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // optimiezed solution
    let hash = {};

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if(!hash[sortedStr]) hash[sortedStr] = [];
        hash[sortedStr].push(str)
    }
    return Object.values(hash);
};