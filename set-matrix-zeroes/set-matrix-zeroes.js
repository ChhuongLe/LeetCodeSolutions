/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/* 
    Steps: 
        1. Iterate through the matrix
        2. Mark the column and row that contains the 0
        3. Rerun through the matrix 
        4. Find the marks and replace the row and columns with 0's
*/

var setZeroes = function(matrix) {
    // store the length of the row and column
    let r = matrix.length;
    let c = matrix[0].length;
    
    // Create a set to store the unique integers 
    let rows = new Set();
    let cols = new Set();
    
    // mark the rows and columns that are to be made 0
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j]===0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    
    //Iterate through the array again and update the elements
    for(let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if(rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};