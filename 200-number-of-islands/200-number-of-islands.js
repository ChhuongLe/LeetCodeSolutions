/**
 * @param {character[][]} grid
 * @return {number}
 */

// perform a dfs on all adjacent children
const DFS = (grid, r, c) => {
    // check if out of range or if it is a body of water
    if(r >= grid.length || r < 0 || c >= grid[0].length || c < 0 || grid[r][c] === "0") {
        return;
    }
    
    // flip the visited island to 0 to indicate that it has been found already
    grid[r][c] = "0";
    
    // perform the dfs vertically and horizontally
    // above
    DFS(grid, r-1, c);
    // below
    DFS(grid, r+1, c);
    // right
    DFS(grid, r, c+1);
    // left
    DFS(grid, r, c-1);
}

// use this function to iterate through the matrix
var numIslands = function(grid) {
    // iterate through the matrix 
    const c = grid[0].length, r = grid.length;
    // variable to keep track of number of islands
    let numIslands = 0;
    
    for(let i = 0; i < r; i++){
        for (let j = 0; j < c; j++){
            if(grid[i][j] === "1"){
                numIslands++;
                DFS(grid, i, j);
            }
        }
    }
    return numIslands;
};