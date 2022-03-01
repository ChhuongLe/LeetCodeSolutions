/**
 * @param {number[][]} grid
 * @return {number}
 */

// use iteration first to find an island
// when an island is found, use a recursive function to traverse connected land and return the sum 
var maxAreaOfIsland = function(grid) {
    let maxArea = 0, n = grid.length, m = grid[0].length;
    
    // set up a traversal
    // parameters will be i & j of the grid
    const traversal = (i,j) => {
        // base cases
        if(i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]){
            return 0;
        }
        // flip to 0 to prevent finding the same island
        grid[i][j] = 0
        // otherwise return sum of distance using the traversals in the up, down, left, and right positions
        return 1 + traversal(i-1, j) + traversal(i, j-1) + traversal(i+1, j) + traversal(i, j+1);
    }
    
    // iterate through the grid
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++) {
            // if grid[i][j] exsists
            if(grid[i][j]){
                // perform the traversal and compare the maxArea
                maxArea = Math.max(maxArea, traversal(i,j));
            }
        }
    }
    
    // return maxArea
    return maxArea;
};