/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // check the lengths of s1 and s2 and see if a permutation is even possible
    if(s1.length > s2.length) return false;
    //initialize a hash to store the count of required strings in s1
    let neededChar = {};
    // traverse through s1 and store the necessary characters from s1 into the hash
    for(const char of s1) {
        neededChar[char] = neededChar[char] + 1 || 1;
    }
    // initialize sliding window parameters
    let l = 0, r = 0, requiredLen = s1.length;
    // traverse through the string until the window size is less than s2.length
    while(r < s2.length) {
        // if s2 contains an equivilent char in s1, decrement the requiredLen
        if(neededChar[s2[r]] > 0) requiredLen--;
        // since an equivilent char was found, we decrement the neededChar 
        neededChar[s2[r]]--;
        // incrememnt window step by 1
        r++;
        // check required length, if requiredLen has reached 0 then a permutation exists
        if(requiredLen === 0) return true;

        // check window length, if length is the same we need to remove the left element
        if(r - l === s1.length) {
            if(neededChar[s2[l]] >= 0) requiredLen++;
            neededChar[s2[l]]++;
            l++;
        }
    }

    return false;
};