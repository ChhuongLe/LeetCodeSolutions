/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0, count = 0, stack = [];
    
    for(let char of s) {
        // if char is the left sided parenthesis
        if(char === '(') {
            // increment the count
            count++;
            // compare it to the max depth
            depth = Math.max(count, depth);
        }
        // if char is the right sided parenthesis
        if(char === ')') {
            // decrement the count
            count--;
        }
    }
    // return max depth
    return depth;
};