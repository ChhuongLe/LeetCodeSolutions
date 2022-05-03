/**
 * @param {number[]} prices
 * @return {number}
 */

/*
    algorithm:
        1. initialize a maxProfit and minStock variable
        2. traverse through the prices array
        3. compare the minStock to the current price and also check if the index is the first value
            3a. if the value is smaller, update minStock
        4. check if the maxProfit is les than the current price and minStock difference
            4a. if it is, update maxProfit
        5. Return max profit
*/
var maxProfit = function(prices) {
    let maxProfit = 0, minStock = Infinity;
    for(let price of prices) {
        if(minStock > price) {
            minStock = price;
        } 
        maxProfit = Math.max(maxProfit, price - minStock);
    }
    return maxProfit;
};