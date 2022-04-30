/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/*
    given a string s and integer k
    string needs to repeat k times before it can be removed
    
    algorithm: 
        1. initialize a stack and a count variable
        2. traverse through the string
            2a. if the current character is the same as before, increment the top of the stack
            2b. else, push 1 to the stack
        3. if the count is the same as k, pop k characters from the stack
        4. return the final stack joined
*/
var removeDuplicates = function(s, k) {
    let stack = [];
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if(s[i-1] !== undefined && s[i-1] === s[i]) {
            stack[stack.length-1]++;
            if(stack[stack.length-1] === k) {
                let index = i-stack[stack.length-1]+1;
                s.splice(index,stack.pop());
                i = index-1;
            }
        } else {
            stack.push(1);
        }
    }
    return s.join('');
};