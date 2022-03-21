/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // use a hash map to keep track of where the last occurance of each letter is 
    let lastHash = {};
    // iterate through s and update the last occurance
    for(let i = 0; i < s.length; i++){
        // if the letter has not been added to the hash
        if(!lastHash[s.charAt(i)]){
            // update the first known occurance
            lastHash[s.charAt(i)] = i;
        } else{
            // otherwise upldate to the lastest occurance
            lastHash[s.charAt(i)] = i;
        }
    }
    // now that we have a hash with all the last known occurances
    // initialize a size variable to keep track of the size of the partitions and a res array to return the size of each partition
    let size = 0, res = [], end = 0;
    
    //now we iterate again and update the size and res variables
    for(let i = 0; i < s.length; i++){
        // increment the size
        size += 1;
        // update the end index with the furthest index found within partion
        end = Math.max(end, lastHash[s.charAt(i)]);
        // if the current i is the same as the end
        if(i === end){
            // update res with the length of the partiation
            res.push(size);
            // reset size
            size = 0;
        }
    }
    // return res at the end
    return res;
};