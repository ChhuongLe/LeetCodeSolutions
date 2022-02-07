/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// reduce repetitive code for making hashes for both strings
const hashFunc = (str) => {
    let hash = {}; 
    for (let i = 0; i < str.length; i++) {
        hash[str[i]] === undefined ? hash[str[i]] = 1 : hash[str[i]] += 1;
    }
    return hash;
}

var findTheDifference = function(s, t) {
    // if s is empty, t is always s.length + 1
    if(s.length === 0) {
        return t;
    }
    // make the hashes for s and t strings
    const sHash = hashFunc(s);
    const tHash = hashFunc(t);
    
    // check for discrepencies
    for(let key in tHash) {
        if(sHash[key] !== tHash[key]){
            return key;
        }
    }
};