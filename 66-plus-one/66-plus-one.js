/**
 * @param {number[]} digits
 * @return {number[]}
 */

/* IOCE:
    Input: array of integers
    Output: array of integers
    Constraints: None
    Edge Cases: None
    
    Example: 
        Input: [9,9]
        Output: [1,0,0]
        
        Explaination:
        
        The input was [9,9] which is 99
        add one to 99 gives us 100
        100 in array form => [1,0,0]
*/

var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--) {
        digits[i]++; 
        if(digits[i] > 9) {
            digits[i] = 0;
        }else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}