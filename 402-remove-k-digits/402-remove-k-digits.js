/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
/*
Remove K Digits: 
    IOCE: 
        Input: num - integer string, k - integer
        Output: result - integer
        Constraints: 
            num will not have leading 0's
            num will only be digits
        Edge Cases: None to consider
*/
var removeKdigits = function(num, k) {
    const stack = [];
    let removed = 0;
    for(let n of num) {
        while(stack.length && n < stack[stack.length-1] && removed < k) {
            stack.pop();
            removed += 1;
        }
        stack.push(n);
    }
    
    // remove all remaining large numbers
    while(removed < k) {
        stack.pop();
        removed += 1;
    }
    
    // remove all beginning zeroes
    while(stack.length && stack[0] === '0') {
        stack.shift();
    }
    
    return stack.join('') || '0';
};