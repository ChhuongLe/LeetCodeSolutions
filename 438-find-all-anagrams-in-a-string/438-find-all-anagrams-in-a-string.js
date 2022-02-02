/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // initialize an utput array
    let output = [];
    // initalize a hash to count the number of occurances that the letters to appear
    let hash = {};
    // initialize a variable to keep track of the found matches
    let match = 0;
    // initialize a variable to keep track of the starting index
    let start = 0;
    // fill the hash
    for (let i = 0; i < p.length; i++) {
        if(!hash[p[i]]){
            hash[p[i]] = 1;
        } else {
            hash[p[i]] += 1;
        }
    }
    // iterate through s and use the window sliding algorithm
    for (let i = 0; i < s.length; i++){
        let right = s[i];
        // if the current char is found in p 
        if(right in hash) {
            // decrease the amount needed for the current char and move the window
            hash[right]--;
            // increase the counter for the number of matches found
            if(hash[right] === 0) {
                match++;
            }
        }
        // if the counter matches the length of the hash
        if (match === Object.keys(hash).length){
            // push the index
            output.push(start);
        }
        // perform the same function backwards to check
        if(i >= p.length-1) {
            let left = s[start];
            start++;
            if(left in hash){
                if(hash[left] === 0){
                    match--;
                }
                hash[left]++;
            }
        }
    }
    // return the output
    return output;
};      