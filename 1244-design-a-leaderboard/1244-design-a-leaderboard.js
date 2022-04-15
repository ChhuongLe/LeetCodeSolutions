
var Leaderboard = function() {
     this.board = new Map();
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */

// add or update a score
Leaderboard.prototype.addScore = function(playerId, score) {
    // update the score of the player
    if(this.board.has(playerId)) {
        // calculate the new score
        let newScore = score + this.board.get(playerId);
        // update the score
        this.board.set(playerId, newScore);
    } else {
        // add a new player
        this.board.set(playerId, score);
    }
};

/** 
 * @param {number} K
 * @return {number}
 */
// prints the top k scores
// sort the scores by highest first
// add the k highest scores and return
Leaderboard.prototype.top = function(K) {
    let scores = Array.from(this.board.values()).sort((a,b)=> b-a);
    
    let sum = 0; 
    
    for(let i = 0; i < K; i++) {
        sum += scores[i];
    }
    return sum;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
// removes the playerId and score
Leaderboard.prototype.reset = function(playerId) {
    this.board.delete(playerId)
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */