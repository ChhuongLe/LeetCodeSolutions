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
    let stack = [], res = Array(temperatures.length).fill(0);
    // start traversing through the array
    for(let i = 0; i < temperatures.length; i++) {
        // while these conditions remain true
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
            // save the index
            let idx = stack.pop();
            res[idx] = i - idx;
        }
        // push to the stack
        stack.push(i);
    }
    // return the result
    return res;
};
