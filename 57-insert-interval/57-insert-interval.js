/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function(intervals, newInterval) {
    // initialize a result matrix
    let result = [];
    // iterate through the intervals matrix
    for([start,end] of intervals) {       
        // first try to find out if the newInterval can be placed into the current location
        if(!newInterval || end < newInterval[0]){
            // if the end of the current interval is less than the start of the new interval
            // push the current interval into the result array
            result.push([start,end]);
        } else if(start > newInterval[1]) { // if newIntervals end value is less than the current                                               start, push it into the result matrix 
            result.push(newInterval);
            // set newInterval to null to signify that the newInterval has been added
            newInterval = null;
            // push the current interval in now
            result.push([start,end]);
        } else { // now we check if it newInterval is in the middle of the other intervals given
                 // similar algorithm found in the merge interval problem
            newInterval[0] = Math.min(start, newInterval[0]);
            newInterval[1] = Math.max(end, newInterval[1]);
        }
    }
    
    // if the loop has ended and new interval has not been added
    if (newInterval){
        result.push(newInterval);
    }
    // return the final result
    return result;
};