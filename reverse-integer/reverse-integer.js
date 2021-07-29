/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let stringArr = x.toString().split('');
    let reverseArr = [];
    let isNeg = false;
    let result;
    for (let i = stringArr.length-1; i >= 0; i--) {
        if(stringArr[i] === '-'){
            isNeg = true;
            continue;
        }
        reverseArr.push(stringArr[i]);
    }
    if (isNeg){
        reverseArr.unshift('-');
    }
    result = reverseArr.join('');
    if (result > Math.pow(2,31)-1 || result < -Math.pow(2,31)) {
        return 0;
    } else {
        return result;
    }
};