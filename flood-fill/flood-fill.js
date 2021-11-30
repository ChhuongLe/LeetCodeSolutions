/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor) => {
    // once the colors have all been changed, return the final image
    if (image[sr][sc] === newColor) {
        return image;
    }
    // 
    const startingColor = image[sr][sc];
    DFSHelper(image, sr,sc, newColor, startingColor);
    return image;
}

const DFSHelper = (image, sr, sc, newColor, startingColor) => {
    //use this function to swap colors
    if (sr < 0 || 
        sr >= image.length ||
        sc < 0 ||
        sc >= image[0].length ||
        image[sr][sc] == newColor ||
        image[sr][sc] != startingColor) {
        return;
    }
    image[sr][sc] = newColor;
    DFSHelper(image, sr - 1, sc, newColor, startingColor); // upwards
    DFSHelper(image, sr + 1, sc, newColor, startingColor); // downwards
    DFSHelper(image, sr, sc + 1, newColor, startingColor); // right
    DFSHelper(image, sr, sc - 1, newColor, startingColor); // left
}