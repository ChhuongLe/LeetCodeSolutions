/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

/*
    given: 
        1. s.length === t.length
        2. only consist of lowercase letters
    
    algorithm:
        1. loop over s and count the frequency of letters (store into a hash)
        2. loop over t and count the frequency of letters 
            2a. calculate the difference between the frequencies
            2b. store/update the difference in a count
        3. return the count
*/
var minSteps = function(s, t) {
    let sHash = {}, diff = 0;
    // traverse the s string
    for(let i = 0; i < s.length; i++) {
        // update sHash
        if(!sHash[s[i]]) sHash[s[i]] = 1;
        else sHash[s[i]]++;
    }
    // count the differences
    for (let letter of t) {
        if(sHash[letter]) sHash[letter]--; 
        else diff++;
    }
    // return diff
    return diff;
};