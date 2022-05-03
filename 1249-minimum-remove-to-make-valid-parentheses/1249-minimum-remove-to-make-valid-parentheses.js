/**
 * @param {string} s
 * @return {string}
 */

/*
    Algorithm:
        1. initialize an array that will store the indexes to be removed
        2. traverse throught the string
            2a. if a '(' is found, update the stack 
            2b. if a corresponding ')' is found, pop the index that corresponds with the '('
        3. otherwise, update the removeIndex array if a floating ')' is found 
        4. add all the hanging '(' indexes into the remove index array
        5. Remove the indexes 
        6. Return the final string
*/
var minRemoveToMakeValid = function(s) {
    let stack = [], removeIndexes = new Set(), res = '';
    
    for(let i in s) {
        if(stack.length === 0 && s[i] === ')') {
            removeIndexes.add(i);
        } else if (s[i] === '(') {
            stack.push(i);
        } else if (i !== 0 && s[i] === ')') {
            stack.pop();
        } 
    }
    
    if (stack.length !== 0) {
        for(let el of stack) {
            removeIndexes.add(el);
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if(removeIndexes.has(i+'')) {
            continue;
        }
        res+=s[i];
    }
    return res;
};