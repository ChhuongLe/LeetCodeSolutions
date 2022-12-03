/**
 * @param {string} s
 * @return {number}
 */

 // stack method: s will always be valid
var maxDepth = function(s) {
    let count = 0, maxDepth = 0;
    for (const char of s) {
        if(char === '(') {
            count++;
            maxDepth = Math.max(count, maxDepth);
        } else if (char === ')') {
            count--;
        }
    }
    return maxDepth;
};
