/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
    Algorithm: 
        1. set up a hash for s
        2. traverse through s 
            2a. store the character as a key and the number of times it appears as the value
        3. traverse through t
            3a. check if the character of t exsists in s
            3b. if it does, decrement the value
            3c. if it does not, then return false as the letter does not exsist in s and therefore is not an anagram
*/
var isAnagram = function(s, t) {
    if(t.length !== s.length) {
        return false;
    }
    let sHash = {};
    for(let char of s){
        if(sHash[char]){
            sHash[char]++;
        } else {
            sHash[char] = 1;
        }
    }
    for(let char of t) {
        if(!sHash[char]) {
            return false;
        }
        sHash[char]--;
        if(sHash[char] === 0) {
            delete sHash[char];
        }
    }
    return [... Object.keys(sHash)].length === 0;
};