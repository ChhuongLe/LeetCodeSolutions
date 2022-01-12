/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // initialize a variable to store the single last word
    let lastWord = "";
    // start from the end of the string
    for (let i = s.length-1; i >= 0; i--) {
        // find when the first character is not an empty space
        if(s[i] !== " ") {
            lastWord+=s[i];
        // once a word has been found and the next empty space is found, break out of the loop
        }else if(lastWord.length > 0 && s[i] === " "){
            break;
        }
    }
    // return the length of the last word
    return lastWord.length;
};