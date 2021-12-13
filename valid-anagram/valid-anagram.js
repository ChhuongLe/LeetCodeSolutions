/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash = {};
    let hash2 = {};
    for (let i = 0 ; i < s.length; i++) {
        if(hash[s[i]]===undefined){
            hash[s[i]] = 1;
        } else {
            hash[s[i]] += 1;
        }
    }
    
    for(let i = 0; i < t.length; i++) {
        if(hash2[t[i]]===undefined) {
            hash2[t[i]] = 1;
        } else {
            hash2[t[i]] += 1;
        }
    }
    
    if(_.isEqual(hash,hash2)) {
        return true;
    }
    return false;
};