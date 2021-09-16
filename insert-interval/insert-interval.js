/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = (intervals, newIntervals) => {
    // // base case where intervals is empty
    // if (intervals === 0) {
    //     return [newIntervals];
    // }
    // initialize a result matrix 
    let result = []
    // iterate through the matrix of intervals 
    for (const [start, end] of intervals) {
        // if the newInterval has been added or we've just started initializing
        if (!newIntervals || end < newIntervals[0]) {
            // push it into the result array
            result.push([start, end]);
        // else if the new interval ends before the current one starts
        } else if (newIntervals[1] < start) {
             // push the new interval into the array
            result.push(newIntervals);
            // set the new interval to null to signify that it has been added to the result
            newIntervals = null;
            // push the rest of the items into the result array
            result.push([start,end]);
        // else we need to create a merge due to an overlap
        } else {
          newIntervals[0] = Math.min(newIntervals[0], start);
          newIntervals[1] = Math.max(newIntervals[1], end);
        }
    }
    // however, if the new interval has not been added, that means it was the last item in the list
    if (newIntervals) {
        result.push(newIntervals);
    }
    // return result after iteration and checks are all complete
    return result;
} 