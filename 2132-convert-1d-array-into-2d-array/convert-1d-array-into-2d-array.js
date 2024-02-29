/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    // check if 3D array is possible
    if(original.length !== m*n) return [];
    let res = [], subArr = [];

    // traverse through the array
    for(let i = 0; i < original.length; i++) {
        // create a sub array with the values
        subArr.push(original[i])
        // if length meets n
        if(subArr.length === n) {
            // push into result
            res.push(subArr)
            subArr = [];
        }
    }
    return res;
};