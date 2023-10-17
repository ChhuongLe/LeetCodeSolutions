/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 1) return 1;
    // initialize set to store only unique values starting with the first char
    // also allows for constant time look up
    let freq = new Set(s[0]);
    // initialize window size of 1
    let l = 0, r = 1;
    let maxLength = 0;

    while(r < s.length) {
        // if set does not contain current character
        if(!freq.has(s[r])) {
            // add to the set
            freq.add(s[r]);
            // increase window size
            r++
            // update maxLength
            maxLength = Math.max(maxLength, r-l);
        } else {
            // remove repeating character starting from the end
            freq.delete(s[l]);
            // slide window up one letter
            l++
            freq.add([s[r]]);
        }
    }
    return maxLength;
};