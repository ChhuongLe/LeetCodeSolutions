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
        change strings to array
        sort arrays according to alphabetical order
        join them
        check if they are identical
        return true if they are
        return false if they are not
*/
var isAnagram = function(s, t) {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    if(s === t) {
        return true;
    }
    return false;
};