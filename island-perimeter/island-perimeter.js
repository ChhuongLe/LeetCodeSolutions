/**
 * @param {number[][]} grid
 * @return {number}
 */

const islandPerimeter = (grid) => {
    const row = grid.length;
    const col = grid[0].length;
    
    let perimeter = 0;

    // iterate through the rows
    for(let i = 0; i < row; i++){
        // iterate through the columns
        for(let j = 0; j < col; j++) {
            // if grid at i and j is not 1
            if(!grid[i][j]) {
                // continue
                continue;
            }
            // add 4 to perimeter when an island is found
            perimeter +=4;

            // decrement if a connection is made
            if (i > 0 && grid[i-1][j])
                perimeter--;
            if (j > 0 && grid[i][j-1])
                perimeter--;
            if (i < row - 1 && grid[i+1][j])
                perimeter--;
            if (j < col - 1 && grid[i][j+1])
                perimeter--; 
        } 
    }
    return perimeter;
}
