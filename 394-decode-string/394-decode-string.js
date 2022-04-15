/**
 * @param {string} s
 * @return {string}
 */

/*
    Algo:
        1. traverse through the stirng s
        2. add all characters that are not ']' to the stack
        3. if ']' is found, then perform the following
            3a. pop the top of the stack and append the str variable until a '[' is found
            3b. pop the top of the stack until the next character is not a numerical value
            3c. add the non numerical value back into the stack
            3d. repeat the substring and add it back to the stack
        4. continue through s and go back to step 3 if another ']' is found
        5. return the stack joined
*/
var decodeString = function(s) {
    let stack = [];
    // iterate through the string s
    for(const char of s) {
        // if char is not the right bracket
        if(char !== ']') {
            // push it into the stack
            stack.push(char);
        } 
        else  { 
            // otherwise if the ']' is found, then perform these steps
            // initialize variables
            let str = '', currChar = stack.pop(), num = '';
            // keep popping the stack until the left bracket is found
            while(currChar !== '[') {
                console.log(currChar);
                str = currChar + str;
                // pop the next character to traverse through the stack
                currChar = stack.pop();
            }
            // once '[' has been found, we can store a numerical value
            currChar = stack.pop();
            while(!Number.isNaN(Number(currChar))) {
                num = currChar + num;
                currChar = stack.pop();
            }
            // once a non numerial value is found 
            // add the currChar to the stack
            stack.push(currChar);
            stack.push(str.repeat(Number(num)));
        }
    }
    return stack.join('');
};