/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    // store the letters of t into a hash
    let letters = {};

    // traverse through t and count the letters
    for(let c of t) {
        if(!letters[c]) {
            letters[c] = 1;
        } else {
            letters[c]++;
        }
    }

    // now check if all the letters are present in s are also present in t
    for(let c of s) {
        // if a character in s does not exist in the letter hash, return false
        if(!letters[c]) {
            return false;
        } 
        // otherwise decrement the number of letters in the hash
        letters[c]--;
        if(letters[c] === 0) {
            delete letters[c];
        }
    }
    return [... Object.keys(letters)].length === 0;
};