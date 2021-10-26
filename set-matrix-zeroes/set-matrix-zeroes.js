/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/*
    IOCE: 
       Input: Matrix
       Output: Matrix
       Constraints: 
            1. m === matrix.length
            2. n === matrix[0].length
            3. 1 <= m, n <= 200
            4. All numbers are within 32 bit range
      Edge Cases/Examples: None, example done in excalidraw
*/

// Must be done IN PLACE
const setZeroes = (matrix) => {
    const m = matrix.length;
    const n = matrix[0].length;

    let row_set = new Set();
    let col_set = new Set();
    
    // iterate through the matrix
    // find the zeroes
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++){
            if (matrix[i][j] === 0){
                // remember this position, this row and column need to be zero'd out
                row_set.add(i);
                col_set.add(j);
            }
        }        
    }
    // next step is to update the matrix
    // iterate through
    for (let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            // if the row has i or if the col has j
            if (row_set.has(i) || col_set.has(j)) {
                // update the number
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}