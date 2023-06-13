/**
 * @param {string} s
 * @return {number}
 */

 /*
    IOCE:
        input: s - string 
        output: result - integer 
        constraints: can be any form of digits, symbols, spaces
        example: "abcdced"
            longest non repearting substring is abcd so output 
            would be 4
            abcd - longest substring: 4
            bcd
            cd
            ced
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 1) return 1;
    // initialize hash to store frequency of characters
    let frequency = new Set(s[0]);
    // initiallize a variables that reference the start and end of the window
    let l = 0, r = 1;
    // return variable
    let max = 0;
    
    // start the traversal while the right most side of the window is still within the string's length
    while(r < s.length){
        // if the set does not contain the current char
        if(!frequency.has(s[r])) {
            // add to set
            frequency.add(s[r]);
            // increase the window size
            r++;
            // compare the current max to the new max
            max = Math.max(max, r - l);
        } else {
            // set contains the current char, remove the repeating char
            frequency.delete(s[l]);
            // move the start of the sliding window up one element
            l++;
            frequency.add([s[r]]);
        }
    }
    return max;
};