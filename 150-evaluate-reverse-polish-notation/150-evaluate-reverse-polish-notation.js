/**
 * @param {string[]} tokens
 * @return {number}
 */

/*
    IOCE:
        Input: tokens - array of integers and operators
        Output: integer
        Constraint: only valid inputs
        Example: ["2","1","+","3","*"]
                 ((2+1)*3) = 9
                 
    Algorithm: 
        1. initialize a stack
        2. initialize an object of operation functions
        3. traverse through the tokens
        4. check if the current token is an operator
           4a. If it is, perform the operation
           4b. If not, push the integer into the stack
        5. Return the final value 
*/

var evalRPN = function(tokens) {
    let stack = [];
    
    const operations = {
        "+": (a,b) => a+b,
        "-": (a,b) => a-b,
        "*": (a,b) => a*b,
        "/": (a,b) => Math.trunc(a/b),
        
    };
    
    for(const token of tokens) {
        if(token in operations) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            const operation = operations[token];
            stack.push(operation(num1, num2));
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
};