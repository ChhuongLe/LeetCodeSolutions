/**
 * @param {string} s
 * @return {string}
 */
/*
    algorithm: 
        1. initialize a stack
        2. traverse through the string 's'
        3. populate the stack and ignore spaces 
*/
var reverseWords = function(s) {
    let wordArr = s.split(" "), stack = [];
    // traverse through the wordArr
    for(let word of wordArr){
        // if word is not empty space
        if(word !== ''){
            // push to the front of the stack
            stack.unshift(word);
        }
    } 
    // return the stack joined with 1 space between each word
    return stack.join(' ');
};