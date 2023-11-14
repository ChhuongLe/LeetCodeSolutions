/**
 * @param {string} s
 * @return {string}
 */

 /*
    IOCE:
        input: s - string that contains only upper and lower case characters
        output: t - resulting string after sorting occurs
        constraints: s will only contain characters, upper and lower case
        example: 
            "lEetcOde"
        sorting from ascii codes uppercase E occurs before e

        result: lEOtcede
 */
var sortVowels = function(s) {
    // initialize a set of vowels
    const v = 'aeiouAEIOU';
    const vowelDict = new Set();
    [...v].forEach(c => vowelDict.add(c));
    
    // create an array of vowels
    let vowels = [];
    //traverse through s and gather the vowels
    for(const c of s) {
        if(vowelDict.has(c)) vowels.push(c);
    }
    // sort vowels in decending order then reverse the orde
    vowels = vowels.sort().reverse();

    //traverse through s and find vowels to replace
    let t = '';
    for(let c of s) {
        // if c is a vowel, add to t
        if(vowelDict.has(c)) t += vowels.pop();
        // otherwise add the consonant
        else t += c;
    }
    return t;
};
