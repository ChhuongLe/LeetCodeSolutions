/**
 * @param {string} s
 * @return {string}
 */
/*
    IOCE:
        input: s - string 
        output: res - string
        constraints: s will always have some character value in it
                     s will always be either '(' or ')' or any lowercase english character
                     
                     
        edge cases: none to consider
*/
/*
    Algorithm: 
        split the array 
        search for a left paren
            if a right paren is found first, pop it 
            if a left paren is found, keep it in the stack until a right paren is found
        if a right paren is not found with the left paren, pop it out of the stack
*/
var minRemoveToMakeValid = function(s) {
    // split the array up into elements
    s = s.split('')
    let stack = [];
    // iterate through
    for (let i in s){
        // if the current index at s is '('
        if(s[i] === '('){
            // push it into the stack
            stack.push(i);
            // if its ')'
        } else if(s[i] === ')'){
            // check if the stack is empty
            if (stack.length === 0){
                // if it is, then this is not valid and we make it a ""
                s[i] = "";
            } else {
                // otherwise pop the index out since it is valid
                stack.pop();
            }
        }
    }
    
    // if there are extra '(' we remove it here using the stored indexes in the stack
    for(let i of stack){
        console.log(i);
        s[i] = "";
    }

    // return the string joined 
    return s.join('');
};