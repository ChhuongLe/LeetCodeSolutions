/**
 * @param {number[][]} image
 * @return {number[][]}
 */

/*
    IOCE: 
    Input: n x n matrix
    Output: n x n matrix
    Constraints: n == image.length, n == image[i].length
                 1 <= n <= 20
                 images[i][j] is either 0 or 1
    Edge Cases: None
*/

const flipAndInvertImage = (image) => {
    if (image.length === 0) {
        return [];
    }
    
    // iterate through the matrix
    for (let row in image) {
        // flip it horizontally
        image[row] = image[row].reverse();
        // now invert the numbers
        image[row] = image[row].map(el => 1 - el);
    }
    // return the converted image
    return image;
}