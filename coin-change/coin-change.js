/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/* Dynamic programming problem again */

/* IOCE: 
    input: array of coins and integer amount 
    output: integer (representing smallest number of coins to produce the amount) 
    constraints: coins will never be negative, amount will never be negative 
    edge cases: if array of coins cannot reach amount demonination, return -1
*/

var coinChange = function(coins, amount) {
    // using a dyamic array we can split the problem into subproblems until the problem is satisfied
    // since we want to have the smallest integer combination, need an impossible number to be the starting value 
    // the dyanmic array values
    let dp = Array(amount+1).fill(amount+1);
    // base case, amount is 0. Need 0 coins for that
    dp[0] = 0;
    
    // loop through the array until the amount is achieved
    for (let i = 0; i <= amount; i++) {
        // inner loop is to loop through all the possible combinations and compare current value to min value
        for (let j = 0; j <= coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i-coins[j]]);
            }
        }
    } 
    if (dp[amount] > amount) {
        return -1;
    }
    return dp[amount];
};