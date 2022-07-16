/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
    Example:
        s = "car", t = "rac"
        
        car and rac have the same letters present so return true
        
    Algo:
        traverse through s, update the hash with
*/
var isAnagram = function(s, t) {
    s = s.split('').sort().join('');
    t= t.split('').sort().join('');
    if(s === t) {
        return true;
    }
    return false;
};