/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let sConcat = s.split(' ').join('').toLowerCase();
    let strippedStr = [];
    for(const char of sConcat) {
        if(isLetter(char)) strippedStr.push(char);
    } 

    return (JSON.stringify(strippedStr) === JSON.stringify(strippedStr.reverse()));
};

const isLetter = (s) => {
    const letters = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0',  '1', '2', '3', '4', '5', '6', '7', '8', '9']);

    if(letters.has(s)) return true;

    return false;
}