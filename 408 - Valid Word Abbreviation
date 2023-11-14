/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */

 /*
    IOCE:
        input: 
            word - string
            abbr - string
        output: boolean
        constraints: word only consists of string (lowercase)
                     no leading 0's
        example:
            word = subsitution
            abbr = "s10n" */

var validWordAbbreviation = function(word, abbr) {
    let skipCount = 0, j = 0;
    for(const a of abbr.split('')) {
        if(!isNaN(a)) {
            const num = Number(a);
            if(!skipCount && !num) return false;
            skipCount = skipCount * 10 + num;
        } else {
            j += skipCount; 
            if(a !== word[j]) return false;
            j++;
            skipCount = 0;
        }

    }
    // the tailing could be digit
    return skipCount + j === word.length;
};
