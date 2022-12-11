var Leaderboard = function() {
    this.board = new Map();
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */

 // add score if player exsists, otherwise make a new key value pair for this player
 // if the playerId does not exsist, make a new addition to the board
Leaderboard.prototype.addScore = function(playerId, score) {
    if(this.board.has(playerId)) {
        // add the score to the old score and update the leaderboard
        let newScore = score + this.board.get(playerId);
        this.board.set(playerId, newScore);
    } else this.board.set(playerId, score);
    console.log(this.board);
};

/** 
 * @param {number} K
 * @return {number}
 */

 // return the sum of scores of the top K players
Leaderboard.prototype.top = function(K) {
    // make an array that is in descending using the board map
    let scores = Array.from(this.board.values()).sort((a,b) => b-a);
    let sum = 0;
    // traverse K elements and add to sum
    for(let i = 0; i < K; i++) {
        sum += scores[i];
    }
    // return the final result
    return sum;
};

/** 
 * @param {number} playerId
 * @return {void}
 */

 // remove the score of the player from the leaderboard
Leaderboard.prototype.reset = function(playerId) {
    this.board.delete(playerId);
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj =   Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
