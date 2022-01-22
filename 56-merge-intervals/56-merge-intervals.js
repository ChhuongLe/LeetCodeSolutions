/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/*
    IOCE: 
        Input: Array of Array of integers
        Output: Array of array of integers
        Constraints: none
        Edge Cases: none
*/

/*
    Example:
        [[1,3], [8,10], [15,18], [2,6]]
        Sort intervals using their starting values
        [[1,3], [2,6], [8,10], [15,18]]
        merge intervals that overlap
        [[1,6], [8,10], [15,18]]
*/

let sortIntervals = (a,b) => {
    if(a[0] === b[0]) {
        return 0;
    } else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

var merge = function(intervals) {
    // sort the intervals inside intervals
    intervals.sort(sortIntervals);    
    for (let i = 1; i < intervals.length; i++){
        // initialize pointers for start end
        let curr = intervals[i];
        // initialize pointers for the previous intervals
        let prev = intervals[i-1];
        // compare the start of the current interval to the end of the last one
        if(curr[0] <= prev[1]) {
            intervals[i] = [Math.min(prev[0],curr[0]), Math.max(prev[1],curr[1])];
            intervals.splice(i-1,1);
            i -= 1;
        }
    }
    // return output
    return intervals;
};