/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const findRow = (matrix, target) => {
    let top = 0, bottom = matrix.length - 1;
    
    let len = matrix[0].length - 1, row;
    
    while(top <= bottom) {
        row = Math.floor((top+bottom)/2);
        
        if(target < matrix[row][0]) {
            bottom = row - 1;
        } else if(target > matrix[row][len]) {
            top = row + 1;
        } else {
            break;
        }
    }
    return row;
}

var searchMatrix = function(matrix, target) {
    let row = findRow(matrix, target);
    let arr = matrix[row];
    
    let l = 0, r = arr.length - 1;
    
    while(l <= r) {
        let mid = Math.floor((l+r)/2);
        
        if(target === arr[mid]) {
            return true;
        } else if (target < arr[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return false;
};