/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanObj = {
        'I': 1,
        'V': 5, 
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    let stringArr = s.split('');
    for (let i = 0; i < stringArr.length; i++) {
        if(romanObj[stringArr[i+1]] > romanObj[stringArr[i]]) {
            total += (romanObj[stringArr[i+1]] - romanObj[stringArr[i]]);
            i++;
        } else {
            total += romanObj[stringArr[i]];
        }
    }
    return total;
};