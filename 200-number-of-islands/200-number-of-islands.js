/**
 * @param {character[][]} grid
 * @return {number}
 */

/*
    can use DFS search for the 1's
    
    traverse through the matrix to find a 1
    perform a DFS starting from this 1 (flip to 0)
    when other 1's are found that are connected, flip to 0
    when no more 1's are found, increment the number of islands 
    
    continue through the matrix to find the other islands
    
    return the final number of islands found
*/

const dfs = (grid,r,c) => {
    // constraints
    if(r >= grid.length || c >= grid[0].length || r < 0 || c < 0 || grid[r][c] === '0') {
        return;
    }
    
    grid[r][c] = "0";
    
    // perform the DFS
    dfs(grid, r+1, c);
    dfs(grid, r-1, c);
    dfs(grid, r, c+1);
    dfs(grid, r, c-1);
};

var numIslands = function(grid) {
    // initialize variables for column and row lengths
    const c = grid[0].length, r = grid.length;
    let numIslands = 0;
    
    // traverse through the matrix
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++){
            // if a 1 is found, perform a DFS
            if(grid[i][j] === '1'){
                numIslands++;
                dfs(grid, i, j)
            }
        }
    }
    // return the final number of islands
    return numIslands;
};