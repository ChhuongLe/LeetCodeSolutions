/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // set up hash to track frequency of letters
    let freq = {};
    
    let mostFreq = 0, longest = 0;
    // initialize sliding window params
    let l = 0, r = 0;

    // traverse while the right pointer is 
    while(r < s.length) {
        // record the frequencies of each character
        freq[s.charAt(r)] = freq[s.charAt(r)] + 1 || 1;
        // check if the newly encountered character has the most appearances
        mostFreq = Math.max(mostFreq, freq[s.charAt(r)]);

        // check validity of window size ((r - l + 1) - mostFreq > k)
            // if window is valid, then there would be enough k replacements to make that letter the most frequent
            // otherwise increment the left pointer until valid window is found
            // everytime this is done, reduce the window size
        while((r - l + 1) - mostFreq > k) {
            freq[s.charAt(l)] -= 1;
            l++;
        }
        // once valid window is found, check for longest string
        longest = Math.max(longest, r-l+1);
        // increment r
        r++;
    }
    return longest;
};