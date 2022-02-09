/**
 * @param {number} n
 * @return {number}
 */
/*
    IOCE:
        Input: n = integer
        Output: counter = integer
        Constraints: n >= 1
        Edge Cases: n = 1
*/

// recursive approach
var integerReplacement = function(n, ctr = 0) {
    // base case and final result, if n reaches 1
    if (n === 1) {
        return ctr;
    }
    
    // use the listed operations 
    if(n%2 === 0){
        return integerReplacement(n/2, ctr+1);
    } else {
        return Math.min(integerReplacement(n+1, ctr+1), integerReplacement(n-1,ctr+1));
    }
};