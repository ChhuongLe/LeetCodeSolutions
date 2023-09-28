/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sortedStr = [], hash = {}, i = 0, res = [];

    for(const s of strs) {
        // push a sorted string into the sortedStr array (i.e. NAT -> ANT & TAN -> ANT)
        sortedStr.push(s.split('').sort().join());
    }

    // now that we have a sorted array, compare the matches and store the indicies
    for(const s of sortedStr) {
        if(!hash[s]) {
            hash[s] = [i];
        } else {
            hash[s].push(i);
        }
        i++;
   } 

   for(const key in hash) {
       let subArr = [];
       for(let idx of hash[key]) {
           subArr.push(strs[idx]);
       }
       res.push(subArr);
   }
   return res;
};