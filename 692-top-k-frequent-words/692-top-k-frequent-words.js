/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

/*
    Given an array of strings
    Return k most frequently seen strings
    
    ie ['i', 'love', 'cats', 'i', 'love', 'dogs'] k = 2
    
    i shows up twice 
    love shows up twice
    cats shows up once 
    dogs shows up once 
    
    in this case, we would return ['i', 'love'] 
     
*/

var topKFrequent = function(words, k) {
    // use a hash to store the words and the number of times they appear
    let freqHash = {};
    // traverse through the words array and update the word frequency hash
    for (const string of words) {
        if(!freqHash[string]) {
            freqHash[string] = 1
        } else {
            freqHash[string]++;
        }
    }
    // sort the order of the hash via frequency and lexically
    let sortable = [];
    for (const string in freqHash) {
        sortable.push([string, freqHash[string]]);
    }
    
    sortable.sort((a,b) => {
        if(a[1] !== b[1]){
            return b[1] - a[1];
        } else {
            return a[0] < b[0] ? -1 : 1;
        }
    });

    // store the most frequent in a result array
    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(sortable[i][0]);
    }
    // return the resulting array with the k most frequently seen items
    return res;
};