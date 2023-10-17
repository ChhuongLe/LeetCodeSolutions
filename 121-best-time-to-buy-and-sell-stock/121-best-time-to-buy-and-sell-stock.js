/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // initialize a window size of 1 
    let maxProfit = 0, l = 0, r = 1;
    // traverse through the array while right has not reached the end
    while(r < prices.length) {
        // only perform these operations if the left side is less than the right
        if(prices[l] < prices[r]) {
            // calculate the difference
            let diff = prices[r] - prices[l];
            // store the largest profit
            maxProfit = Math.max(diff, maxProfit);
        } else { // otherwise, move the left pointer and slide the window
            l = r
        }
        // increment the right side
        r++;
    }
    return maxProfit;
};
