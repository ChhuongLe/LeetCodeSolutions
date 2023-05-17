/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
    Question asks us to find a solution that is of O(log(m*n)) complexity
    
    if we implement 2 binary searches to first find the row that the element could possibly be located in
    then find the element itself within that row, this would fulfill the constraint
    
    First implement a function called findRow
        1. initialize top and bottom variables to keep track of which rows we are on
        2. traverse through the array
        3. Isolate the "middle" row of the matrix
        4. Compare the target to the start and end of the matrix
            4a. if the target is less than the start -> move the bottom up
            4b. if the target is greater than the end -> move the top down
        5. If both checks fail, break out of the loop and return the index of the row
        
    Now we search through the array that we isolated using binary search using similar principles 
*/

const findRow = (matrix, target) => {
    let top = 0, bottom = matrix.length - 1;
    let len = matrix[0].length - 1, mid;
    
    while (top <= bottom) {
        mid = Math.floor((top+bottom)/2);
        if(target < matrix[mid][0]) {
            bottom = mid - 1;
        } else if (target > matrix[mid][len]) {
            top = mid + 1;
        } else {
            // break out if number may be in the row
            break;
        }
    }
    // return the index of the row 
    return mid;
}

var searchMatrix = function(matrix, target) {
    let row = findRow(matrix, target);
    let arr = matrix[row];
    
    let left = 0, right = arr.length - 1, mid;
    
    while (left <= right) {
        mid = Math.floor((left + right)/2);
        if(target === arr[mid]) {
            return true;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};