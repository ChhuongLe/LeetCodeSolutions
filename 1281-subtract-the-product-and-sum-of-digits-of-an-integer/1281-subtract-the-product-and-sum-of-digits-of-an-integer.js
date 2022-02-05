/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const digits = (""+n).split("");
    
    let sum = 0;
    let product = 1;
    for(let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
        product *= parseInt(digits[i]);
    }
    
    return product - sum;
};