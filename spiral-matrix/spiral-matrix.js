/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*
IOCE:
    Input: matrix
    Output: array
    Constraints: 
        1. m === matrix.length
        2. n === matrix[0].length
        3. 1 <= m, n <= 10
        4. -100 <= matrix[i][j] <= 100
    Edge Cases/ Examples: None, Example done in excalidraw
*/

const spiralOrder = (matrix) => {
    let nums = [];
    // matrix is empty, return an empty array
    if (matrix === null || matrix.length === 0) {
        return nums;
    }
    // set top, bottom, left, and right bound initializers 
    let top = 0, bottom = matrix.length-1, left = 0, right = matrix[0].length-1;
    let size = matrix.length * matrix[0].length;

    // iterate through the matrix
    while (nums.length < size) {
        for (let i = left; i <= right && nums.length < size; i++) {
            nums.push(matrix[top][i]); // [0,0] -> [0,3]
        }
        // top is complete, increment to update the top bound
        top++;
        // iterate through the matrix on the right most side and grab those numbers
        for (let i = top; i <= bottom && nums.length < size; i++) {
            // right side complete
            nums.push(matrix[i][right]);
        }
        // update right value 
        right--;  
        // iterate through the matrix on the bottom and grab those numbers
        for (let i = right; i >= left && nums.length < size; i--) {
            nums.push(matrix[bottom][i]);
        }
        // update the bottom pointer
        bottom--;
        // iterate through the matrix on the left side and grab those numbers
        for (let i = bottom ; i >= top && nums.length < size; i--) {
            nums.push(matrix[i][left]);
        }
        left++;
    }
    return nums;  
} 