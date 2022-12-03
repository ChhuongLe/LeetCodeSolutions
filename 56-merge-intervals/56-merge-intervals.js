/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/*
    Example: 
        Sort the intervals according to the start times of each interval: 
        [[1,3], [8,10], [15,18], [2,6]] -> [[1,3], [2,6], [8,10], [15,18]]
        
        Merge intervals that overlap
        [[1,6], [8,10], [15,18]]
*/
const sortFunc = (a,b) => {
    if(a[0] === b[0]) {
        return 0;
    } else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

var merge = function(intervals) {
    intervals.sort(sortFunc);

    // traversal, start at i = 1 to account for previous itervals
    for(let i = 1; i < intervals.length; i++) {
        let curr = intervals[i], prev = intervals[i-1];
        // compare the start time of the curr pointer to the prev pointer's end time
        if(curr[0] <= prev[1]) {
            // merge the intervals
            intervals[i] = [Math.min(curr[0], prev[0]), Math.max(curr[1], prev[1])];
            // remove element to account for addition
            intervals.splice(i-1, 1);
            // move the loop back one
            i -= 1;
        }
    }

     return intervals;
};
