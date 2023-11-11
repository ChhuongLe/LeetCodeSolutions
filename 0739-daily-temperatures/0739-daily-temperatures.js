/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

 /*
    IOCE
        Input: temperatures - array of integers representing temperatures daily
        Output: result - array of integers respresting number of days until higher temp is reached
        Constraints: Temps will always be positive
        Example:
        [30,40,50,60] 
            1 day after 30 is 40 [1]
            1 day after 40 is 50 [1,1]
            1 day after 50 is 60 [1,1,1]
            1 day after 60, nothing to compare to: [1,1,1,0]

        result: [1,1,1,0]
        
 */
var dailyTemperatures = function(temperatures) {
    // we know the output must be the same size as the temperatures array
    let res = Array(temperatures.length).fill(0);
    // traverse through the temperatures array
    for(let i = 0; i < temperatures.length; i++) {
        let currTemp = temperatures[i];
        let count = 1;
        for(let j = i+1; j < temperatures.length; j++) {
            if(currTemp < temperatures[j]){
                res[i] = count;
                break;
            } else {
                res[i] = 0;
            }
            count++;
        }
    }
    return res;
};