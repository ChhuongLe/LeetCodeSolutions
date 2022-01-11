/**
 * @param {string} s
 * @return {number}
 */

/* IOCE: 
    Input: String  
    Output: integer
    Constraints: None
    Edge Cases/Examples: No edge cases
    
    input: "loveletter"
    Output: 2
    
    reasoning: 
    
    o does not repeat
    
    l: 2
    o: 1
    v: 1
    e: 3
    t: 2
    r: 1
*/
var firstUniqChar = function(s) {
    let letterHash = {};
    
    // iterate thorugh the string and map the number of occurances to the letter
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if (letterHash[letter] === undefined) {
            letterHash[letter] = 1;
        } else {
            letterHash[letter] += 1;
        }
    }
    
    // iterate through the string again and search for a letter that is unique
    for (let i = 0; i < s.length; i++) {
        // once found, return the element location
        if(letterHash[s[i]] === 1) {
            return i;
        }
    }
    // otherwise, return -1
    return -1;
};