/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
    Objective: Return the minimum amount of coins to reach the passed in amount
    
    Algorithm:
        Calculate all variations of 1 -> n coins (bottom up Dynamic Programming)
        
        1. initialize a DP array with size of amount + 1 
        2. initialize a max variable to have the values be compared 
        3. start from the bottom using an iterative approach
        4. traverse through the coin array and begin filling up the dp array with all the possible combination of coins
        5. return the final result
*/
var coinChange = function(coins, amount) {
    let max = amount + 1;
    let dp = new Array(amount+1).fill(max);
    // initialize the first value
    dp[0] = 0;
    // begin calculating for the dp[1] then dp[2] and until 
    for(let i = 0; i <= amount; i++) {
        // traverse through the coins array and fill up all the possible combinations of coins that equal to i
        for(const coin of coins) {
            if(i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === max ? -1 : dp[amount];
};