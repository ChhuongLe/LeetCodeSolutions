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

    for(let i = 0; i < original.length; i++) {
        subArr.push(original[i])
        if(subArr.length === n) {
            res.push(subArr)
            subArr = [];
        }
    }
    return res;
};