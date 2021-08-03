/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numArr = x.toString().split('');
    let reverseArr = [];
    for(let i = numArr.length-1; i >= 0; i--) {
        reverseArr.push(numArr[i]);
    }
    
    for(let i = 0; i < reverseArr.length; i++) {
        if(numArr[i] !== reverseArr[i]) {
            return false;
        }
    }
    return true;
};