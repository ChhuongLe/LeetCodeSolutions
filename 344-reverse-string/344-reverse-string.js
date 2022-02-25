/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/*
    IOCE:  
        Input: s - array of strings
        output: s - array of strings
        constraints:
            Must be done in place!
        edge cases: none  to consider
*/

// use two pointers
var reverseString = function(s) {
    let p1 = 0;
    let p2 = s.length-1;
    
    // continue to do this until the end is reached
    while(p1 < p2){
        // set a temp to store the current character
        let temp = s[p1];
        // perform the swap
        s[p1] = s[p2];
        s[p2] = temp;
        
        // move the pointers
        p1++;
        p2--;
    }
    return s;
};