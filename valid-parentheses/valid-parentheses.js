/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 1) {
        return false;
    }
    // initialize a stack 
    let stack = [];
    // set up a hash
    let hash = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    };
    // iterate through the string 's'
    for(let i = 0; i < s.length; i++) {
        // let c (character) to be a value in the string s
        let c = s[i];
        // if hash contains the value c
        if (hash[c]) {
            console.log(hash[c]);
            // push the value to the stack
            stack.push(hash[c]);
        }
        // otherwise if c is not equivelent to the stack when popped, it the closing is not correct.
        // console.log(stack.pop());
        // console.log(c);
        else if (c !== stack.pop()) {
            return false;
        }
    }
    // if it sucessfully pops through the stack, return true
    return !stack.length;
};