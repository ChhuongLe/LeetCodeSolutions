/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */

/*
    given:
        n: number of friends, will ALWAYS be even
        preferences: sorted list in order of preference
        pairs: the current pairings
        
    Algorithm: 
        1. create a ranking of friends
            1a. based off the current pairs
*/
var unhappyFriends = function(n, preferences, pairs) {
    // initialize the rankings array
    let ranks = [];
    // initialize a variable to store the number of unhappy friends
    let unhappy = 0;
    // traverse through the pairs array and set up the ranking 
    for(let pair of pairs) {
        let [i,j] = pair;
        // have the rankings show what i ranks friend j
        ranks[i] = preferences[i].indexOf(j);
        ranks[j] = preferences[j].indexOf(i);
    }
    // for each person 
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < ranks[i]; j++) {
            // check to see if their friend prefers them before the others
            let friend = preferences[i][j];
            if(preferences[friend].indexOf(i) < ranks[friend]){
                unhappy++;
                break;
            }
            
        }
    }
    return unhappy;
};