/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/*
    IOCE: 
        Input: s1 & s2 - strings
        Output: boolean 
        Constraints: s1 & s2 will never be empty strings 
        Edge Cases: s2 does not contain a permutation of s1 or if s1 lenght is greater than s2
*/

var checkInclusion = function(s1, s2) {
    // cannot hold true is s1 is greater than s2
    if(s1.length > s2.length) return false;
    // use a hash to store frequency and count for the requried s1
    let hash = {};
    // iterate through s1 to update the hash
    for(let i = 0; i < s1.length; i++){
        if(hash[s1[i]] === undefined){
            hash[s1[i]] = 1;
        } else {
            hash[s1[i]] += 1;
        }
    }
    
    // use two pointers to perform the sliding window algorithm
    let left = 0, right = 0;
    // also have a reference for the required length of s2 
    let requiredLen = s1.length;
    
    // iterate until the right index of the window is greater than s2
    while(right < s2.length) {
        // if a letter is found in the hash from s2
        if(hash[s2[right]] > 0){
            // decrement the required len 
            requiredLen--;
        }
        // decrement the number of letters in the hash
        hash[s2[right]]--;
        // increment right pointer
        right++;
        
        // if the requried length is reached
        if(requiredLen === 0){
            // return true
            return true;
        }
        
        // if the window length is equal to s1
        // need to remove left element from the window
        if(right - left === s1.length){
            // reincrement required length
            if(hash[s2[left]] >= 0) {
                requiredLen++;
            }
            // reincrement the number of characters in the hash
            hash[s2[left]]++;
            // reduce the window size by moving the left pointer
            left++;
        }
    }
    // return false if the iteration goes through and finds nothing
    return false
};