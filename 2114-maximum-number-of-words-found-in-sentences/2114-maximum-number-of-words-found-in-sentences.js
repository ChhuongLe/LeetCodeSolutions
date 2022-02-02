/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 1;
    for (let i = 0; i < sentences.length; i++) {
        let numWords = sentences[i].split(" ").length;
        max = Math.max(max, numWords);
    }
    return max;
};