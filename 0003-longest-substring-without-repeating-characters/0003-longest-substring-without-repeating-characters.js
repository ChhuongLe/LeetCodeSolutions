/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // initialize a window size
    let l = 0;
    let set = new Set();
    // initialize a max return variable
    let max = 0;

    for(let r= 0; r < s.length; r++) {
        // if the set has a repeated character
        while(set.has(s[r])) {
            // remove the repeated character from the set
            set.delete(s[l]);
            // increment the left pointer
            l++;
        }
        // otherwise add the next character to the set
        set.add(s[r]);
        // compare the current length to the last recorded max
        max = Math.max(max, set.size);
    }
    return max;
};
