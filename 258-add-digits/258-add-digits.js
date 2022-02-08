/**
 * @param {number} num
 * @return {number}
 */

//brute force method
var addDigits = function(num) {
    // if num is 0, return right away
    if(num === 0) {
        return num;
    }
    // while num is still not a single digit number
    while(num > 9) {
        let sum = 0;
        let numStr = num.toString().split("");
        // add up the individual elements
        for(let i = 0; i < numStr.length; i++) {
            sum += parseInt(numStr[i]);
        }
        // set num to the new number
        num = sum;
    }
    // return once a single number is achieved
    return num;
};