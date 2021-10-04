/**
 * @param {string} s
 * @return {number}
 */

// High level: Find the longest subSTRING with the least number of repeats, not longest subSEQUENCE

/* IOCE:
    Input: String
    Output: Integer
    Constraints: 0 <= s.length <= 5*10^4
    Edge Cases: String can consist of numbers and symbols as well and should be accepted
*/

// make use of the Set data structure as it is designed to only store unique values 

// Time complexity: O(n)
// Space complexity: O(n)

var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }
    
    /* 
     initialize 2 pointers for the string 
     right will move up through the string
     left will keep track of the first position of the string 
    */
    let left = 0, right = 0;
    
    // stores the max length of the string 
    let maxLength = 0;
    
    // use a set to create a store of unique substring values
    let set = new Set();

    while(s.length > right) {
        // if the set does not contain string at index right
        if (!set.has(s[right])) {
            // add it to the set
            set.add(s[right]);
            // increment right
            right++;
            // update maxLength
            maxLength = Math.max(maxLength, set.size);
        } else {
            // if set contains the string at index left, remove the first string in the set
            set.delete(s[left]);
            // increment left
            left++;
        }
    }
    // return max length
    return maxLength;
};