/**
 * @param {string} s
 * @return {boolean}
 */

/*
    IOCE: 
        Input: string
        output: boolean
        constraints: 1 <= s.length <= 2*10^5
        edge cases: none
*/

var isPalindrome = function(s) {
    // remove all the spaces and convert any uppercase letters to lower case
    let strConcat = s.split(' ').join('').toLowerCase();
    // initialize a stripped string array to store the strings after all punctuations have been removed
    let strippedString = [];
    // iterate through the concatenated string
    for (let i = 0; i < strConcat.length; i++) {
        // check if each element is a letter
        if(isLetter(strConcat[i])){
            // push it into the strippedString array if it is confirmed a letter
            strippedString.push(strConcat[i]);
        }
    }
    // if the stripped string and the reverse string are exactly the same 
    // if (JSON.stringify(strippedString) === JSON.stringify(strippedString.reverse())) {
    //     // return true
    //     return true;
    // } else {
    //     // otherwise return false
    //     return false;
    // }
    
    // reduce lines of code
    console.log(strippedString)
    return JSON.stringify(strippedString) === JSON.stringify(strippedString.reverse());
};

const isLetter = (letter) => {
    // store into a set valid letters 
   let letters = new Set (['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']);
    // if the letter is contained in the letters set
    // if (letters.has(letter)) {
    //     // return true
    //     return true;
    // }
    // // otherwise return false
    // return false;
    
    // return boolean, dependant on the if set contains passed in parameter
    return letters.has(letter);
}