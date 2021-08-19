/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // array will be initialized with a bunch of 0's
    // fill with impossible number, amount+1 will do fine
    let dp = new Array(amount+1).fill(amount+1);
    // Start with smallest subproblem
    // Amount 0, it will have 0 coins
    dp[0] = 0;
    
    // loop through until the amount is reached
    for (let i = 0; i <= amount; i++) {
        // use all coins to get to the amount
        for (let j = 0; j < coins.length; j++) {
            if(coins[j] <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};