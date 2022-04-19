/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
    algorithm: (Brute force) 
        1. traverse through the grid
        2. when a '1' is found
            2a. perform a DFS and check for other '1's in the area 
            2b. Store the coordinates of the '1's and continue traversing until no adjacent '1's are found
        3. translate the coordinates that were stored to a common reference point (top left)
            3a. check if there are matching patterns 
            3b. if not, increment the unique counter
        4. return unique island count
*/
/*
    algorithm: (save path traveled)
        1. traverse through the grid
        2. when a '1' is found
            2a. perform a DFS and check for other '1's in the area 
            2b. indicate whether it was an "up", "down", "left", or "right" direction and store it into an array
            2c. return the array back to the main function
        3. check if the current island's shape is present in the array
            3a. if it is, then we can ignore it since a set only stores unique values
            3b. if it is not, then we update the set with the new island shape and increment the uniqueIsland counter
        4. return the total number of unique island shapes
*/

const DFS = (grid, r, c, path) => {
    // perform a DFS from the grid
    // check for one of these conditions
    if(r < 0 || r > grid.length-1 || c < 0 || c > grid[0].length-1 || grid[r][c] === 0) {
        return; 
    }
    // flip the sign from 1 to 0 to indicate that the location has been checked
    grid[r][c] = 0;
    // perform the checks 
    let directions = [[-1, 0, 'U'], [1, 0, 'D'], [0, 1, 'R'], [0, -1, 'L']];
    for(let dir of directions) {
        // push the direction in
        path.push(dir[2]);
        // continue to search
        DFS(grid, r+dir[0], c+dir[1], path);
    }
    // join the array to form a single string
    return path.join("");
};

const numDistinctIslands = (grid) => {
    // initialize a count for unique islands
    let unique = 0;
    let pathSets = new Set();
    // traverse the grid
    const r = grid.length, c = grid[0].length;
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            // if a '1' is found
            if(grid[i][j] === 1) {
                // perform a DFS
                let path = DFS(grid, i, j, []);
                if(!pathSets.has(path)) {
                    pathSets.add(path);
                    unique++;
                }
            }
        }
    }
    return unique;
};