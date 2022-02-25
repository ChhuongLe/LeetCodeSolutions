/**
 * @param {string} s
 * @return {string}
 */

/*
    IOCE: 
        input: s - string
        output: s - string
        constraints: will always have one word in s
                     must be down in-place
                     word order also must not change
        edge cases: none
*/
var reverseWords = function(s) {
    // split s into an array of words
    s = s.split(' ');
    // reverse each word in the array
    for(let i = 0; i < s.length; i++){
        s[i] = reverseWord(s[i]);
    }
    // return the words joined seperated by a space 
    return s.join(' ');
};

// reverses one word
const reverseWord = (word) => {
    // split the word up
    word = word.split('');
    // use two pointers
    let l = 0, r = word.length-1;
    while(l < r) {
        // perform the swap
        let temp = word[l];
        word[l] = word[r];
        word[r] = temp;
        
        // move the pointers
        l++;
        r--;
    }
    // return the joined word
    return word.join('');
}