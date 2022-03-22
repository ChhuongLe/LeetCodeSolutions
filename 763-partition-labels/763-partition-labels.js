/**
 * @param {string} s
 * @return {number[]}
 */
/*
    IOCE:
        Input: s - string
        Output: res - array of integers (integers represent the length of the string)
        Constraints: s will always be of greater length than 0 
        Edge Cases: None to consider
*/ 

/*
    Use a hash to "remember" when a specific letter is found
    
    Next we iterate through s again
     increment the size for each character that is found
     update the end of the partition's size if applicable
     check if the end is where  the current index is
        if it is, push the current size into the res array
        reset the size back to 0 for the next partition
        
    return res in the end
*/
var partitionLabels = function(s) {
    // last hash is to store  the 
    let lastHash = {};
    // iterate through the string and update the last known position
    for(let i = 0; i < s.length; i++){
        if(!lastHash[s.charAt(i)]){
            lastHash[s.charAt(i)] = i;
        } else {
            lastHash[s.charAt(i)] = i;
        }
    }
    
    let size = 0, end = 0, res = [];
    // iterate t
    for(let i = 0; i < s.length; i++){
        // increment size first
        size += 1;
        // check where the end of this partition is at the current letter
        // this is a flag will be set to end the partition
        end = Math.max(end, lastHash[s.charAt(i)]);
        // if i has reached the end of the current partition
        if(i === end){
            // push the size of the partition
            res.push(size)
            // reset size to 0
            size = 0;
        }
    }
    return res;
};