/**
 * @param {string} s
 * @return {number}
 */

/*
    Algorithm:
        1. Read and ignore any leading whitespace
        2. Check for characters that are '-' or '+'
        3. ignore non-digit characters
        4. convert digits into integers
        5. clamp integers out of range to maxInt or minInt
*/
var myAtoi = function(s) {
    const maxInt = (2**31)-1, minInt = -(2**31);
    // sign: if it is positive, keep it as a 1, if it is not then flip to -1
    // index: keeps track of where we are in the string
    // n: length of the string
    let sign = 1, index = 0, n = s.length, result = 0;
    
    // skip over the whitespaces in the string by incrementing the index location
    while(index < n && s[index]===" "){
        index++;
    }
    // check if integer is negative or positive
    if(index < n && s[index] === '+') {
        sign = 1;
        index++;
    } else if(index < n && s[index] ==='-'){
        sign = -1;
        index++;
    }
    // continue traverseing through the string and stop if it isnt a numerical value
    while(index < n && s[index] >= '0' && s[index] <= '9'){
        let digit = s[index] - '0';
        
        // check if the result is greater than the maxInt or less than the minInt
        if(result > Math.floor(maxInt/10) || (result === Math.floor(maxInt/10) && digit > maxInt % 10)){
            return sign === 1? maxInt : minInt;
        }
        result = 10 * result + digit; 
        index++;
    }
    return result * sign;
};