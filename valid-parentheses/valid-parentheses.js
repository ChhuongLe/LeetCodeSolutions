/**
 * @param {string} s
 * @return {boolean}
 */

/* IOCE:
    Input: String
    Output: Boolean
    Constaints: 1 <= s.length <= 10^4
                s will only contain '()[]{}'
    Edge Cases: None
*/

var isValid = function(s) {
    // if the length is 1 return false right away
    if (s.length === 1) {
        return false;
    }
    // if the string is not a factor of 2, there can be know way this can be true
    if (s.length %2 !== 0) {
        return false;
    }
    
    // initialize a stack to be used to keep track of the parenthesis
    let stack = [];
    // set up a mapping for the the parenthesis pairs
    let map = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    };
    
    for(let i = 0; i < s.length; i++) {
        // set c equal to the first character in the string 's'
        let c = s[i];
        // ignore the left sided parenthesis
        if(map[c]) {
            // push complement into the stack
            stack.push(map[c]);
        } else if (c !== stack.pop()) {
            // if a character is found and cannot be popped from the stack. return false 
            return false;
        }
    }
    // return the final condition
    return !stack.length;
};