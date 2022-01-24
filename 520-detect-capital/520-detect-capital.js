/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // return the result of checking if the word is equivelent to itself all uppercased or if the first word is the same as itself when compared to the rest of itself is lowercased aside from the first letter
    return word === word.toUpperCase() || word === word[0] + word.substring(1).toLowerCase();
};