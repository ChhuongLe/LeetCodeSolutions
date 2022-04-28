/**
 * @param {number[]} prices
 * @return {number}
 */

/*
    conditions: you must buy the stock first before selling
    
    algorithm:
        1. initialize a min and max variable to indicate the largest peak and smallest valley
        2. initialize a max profit variable to calculate the most money that could be made
        3. travese through the array
            3a. compare the current price to the min
                3aa. if the current price is less than the min, store it
            3b. otherwise, check the difference of the price and compare it to the currnet max profit
                3ba. if the max profit is found to be lower than that of the current difference, update the max profit variable
        4. return the max profit
*/
var maxProfit = function(prices) {
    // we make min a very large number so that its easily comparable
    let minPrice = Infinity, maxProfit = 0;
    
    for(let price of prices) {
        if(price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
};