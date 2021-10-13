/**
 * @param {number[][]} mat
 * @return {number}
 */

/* 
    IOCE: 
    Input: Matrix of a integers 
    Output: Integer
    Constraints: n === mat.length === mat[i].length 
                 1 <= n <= 100
                 1 <= mat[i][j] <= 100
    Edge Cases: None
*/

var diagonalSum = (mat) => {
    // when all the diagonals are iterated through and found
    // store them into the result array and add at the end
    let sum = 0;
    
    // for book keeping let n = mat.length
    let n = mat.length

    for (let i = 0; i < n; i++) {
        // all major diagonals are [i][i]
        sum += mat[i][i];
        // minor diagonals are n - i
        sum += mat[n-1-i][i]
    }
    // if the length of the matrix is even, there is no center
    if (n % 2 === 0) {
        return sum;
    // otherwise we would have added the center twice.
    } else {
        return sum - mat[Math.floor(n/2)][Math.floor(n/2)];
    }
}