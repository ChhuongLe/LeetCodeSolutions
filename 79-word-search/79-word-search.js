/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
/*
    Algorithm: 
        1. traverse through the board
        2. perform a DFS when the first letter of the word is found
        3. DFS
            3a. check if the conditions are out of range
            3b. Flip the sign to indicate that the letter was checked
            3c. if a letter outside of the search is found, return false
            3d. if all letters are found, return true
        4. Return true if the word is found 
*/

const DFS = (board, word, r, c, index) => {
    // once the index is the same length as the word passed in, return true
    if(word.length === index){
        return true;
    }
    if(r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] !== word[index]) {
        return false;
    }
    // flip the character to indicate that it has been visited
    board[r][c] = 0;
    
    if( DFS(board, word, r-1, c, index+1) ||
        DFS(board, word, r+1, c, index+1) ||
        DFS(board, word, r, c+1, index+1) ||
        DFS(board, word, r, c-1, index+1)) {
        return true;
    }
    // return the board to the original state
    board[r][c] = word[index];
}

const exist = (board, word) => {
    const row = board.length, col = board[0].length;
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            // check if the letter that is seen is the same as the first letter in the word
            // and if the DFS returns true, signifying there is a path to make the word, return true
            if(board[i][j] === word[0] && DFS(board, word, i, j, 0)){
                return true;
            }
        }
    }
    // return false if the traversal ends up not bearing fruit
    return false;
};