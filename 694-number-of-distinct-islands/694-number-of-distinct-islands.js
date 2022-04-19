/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
    algorithm: 
        1. traverse through the matrix
        2. search for a 1
        3. when a 1 is reached, perform a DFS on the current location
            3a. check for cases that fall outside of the matrix
            3b. otherwise, flip the 1 to 0 to label that it has been checked alreadt
            3c. perform a DFS up, down, left, and right until all islands have been checked 
                3ca. While doing this append an array that records the path traveled
        4. compare the path traveled with a set of paths
            4a. if it is unique, increment the unique counter
        5. return the number of unique islands
*/

const DFS = (grid, r, c, path) => {
    // check for out of bounds
    if(r < 0 || r > grid.length-1 || c < 0 || c > grid[0].length-1 || grid[r][c] === 0) {
        // if any of the above conditions are met, do nothing
        return;
    } 
    // otherwise, flip the 1 to 0 to indicate that this location has bee n visitied 
    grid[r][c] = 0;
    
    // perform a dfs on multiple directions and associate the path with a letter representing it
    let directions = [[-1, 0, 'U'], [1, 0, 'D'], [0, -1, 'L'], [0, 1, 'R']];
    for(let dir of directions) {
        path.push(dir[2]);
        DFS(grid, r + dir[0], c + dir[1], path);
    }
    return path.join("");
};

const numDistinctIslands = (grid) => {
    // initialize a set to store the unquie paths 
    let pathSet = new Set();
    // initialize a variable to store unique paths
    let unique = 0;
    
    // traverse through the grid
    const row = grid.length, col = grid[0].length;
    for(let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // if grid at row i and col j is 1
            if(grid[i][j] === 1) {
                // perform a DFS on it and store the returned array into a variable
                let path = DFS(grid, i, j, []);
                // check if the path is present in the set
                if(!pathSet.has(path)) {
                    // if it is not present in the set, increment the unique counter
                    unique++;
                    // add it to the pathSet
                    pathSet.add(path);
                }
            }
        }
    }
    // return the number of unique island shapes;
    return unique;
};