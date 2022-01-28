/**
 * @param {character[]} chars
 * @return {number}
 */

/*
    IOCE:
        Input: chars - array of strings
        output: result - array of strings
        Constraints: chars will always be valid
                     chars will never be empty
        Edge Cases: none to consider
        
*/
var compress = function(chars) {
    let count = 0;
    let currChar = chars[0];
    let j = 0;
    // iterate through the chars array
    for(let i = 0; i <= chars.length; i++) {
        // if the current char is equal the char being looked at, update the current count
        if(currChar === chars[i]){
            count++;
        } else {
            chars[j] = currChar;
            if (count > 1) {
                let numString = count.toString();
                for(let k = 0; k < numString.length; k++){
                    chars[++j] = numString[k];
                }
            }
            j++;
            currChar = chars[i];
            count=1;
        }
    }
    return j;
};
