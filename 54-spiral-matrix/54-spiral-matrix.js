/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*
    Algorithm:
        1. initialize a new matrix (call it result)
        2. set up initial boundaries (top, right, bottom, and left)
        3. Traverse the array in spiral order:
            3a. left to right (update boundary)
            3b. up to down (update boundary)
            3c. right to left (update boundary)
            3d. down to up (update boundary)
        4. return the result matrix
*/
var spiralOrder = function(matrix) {
    let res = [];
    
    const row = matrix.length, col = matrix[0].length;
    let top = 0, right = col-1, left = 0, bottom = row-1;
    
    while(res.length < row * col) {
        // traverse from left to right 
        for(let col = left; col <= right; col++) {
            res.push(matrix[top][col]);
        }
        // traverse from top to bottom (move from the last top element down one)
        for(let row = top+1; row <= bottom; row++) {
            res.push(matrix[row][right]);
        }
        // check if top and bottom have touched
        if(top !== bottom) {
            // traverse from right to left
            for(let col = right - 1; col >= left; col--){
                res.push(matrix[bottom][col]);
            }
        }
        // check if right and left have touched
        if(right !== left) {
            // traverse bottom to top
            for(let row = bottom-1; row > top; row--) {
                res.push(matrix[row][left]);
            }
        }
        // move the boundaries to move along the matrices
        left++, top++, bottom--, right--;
    }
    return res;
};