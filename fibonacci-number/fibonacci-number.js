/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    // if the number input is less than 1, return itself
    if (n <= 1) { 
        return n;
    }
    // otherwise, store the result of F(n-1) + F(n-2)
    let result = fib(n-1) + fib(n-2);
    // return the result until it reaches n <= 1
    return result;
};