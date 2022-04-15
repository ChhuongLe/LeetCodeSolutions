/**
 * @param {number[][]} intervals
 * @return {number}
 */
/*
    Algorithm:
        1. sort the intervlas based off start times 
        2. store the intervals into a queue
            2a. first interval in the queue should be the first scheduled meeting
            2b. check if the next interval is within the queue
                2c. if it is, then add it to the queue
                2d. if it is not, then pop the first element out and add the next interval
            2e. continue until all intervals have been taken care of
*/
var minMeetingRooms = function(intervals) {
    // initialize a variable to store the max number of meeting rooms
    let numRooms = 0;
    // first step is to sort the intervals according to their start times
     intervals.sort(([a],[b])=> a-b);
    // initialize a queue
    let queue = [];
    // iterate through the intervals
    for (let i = 0; i < intervals.length; i++) {
        let curr = intervals[i]
        // check for meetings that have ended
        while(queue.length && queue[0] <= curr[0]) {
            // remove the first element from the queue if a finished meeting is found
            queue.shift();
        }
        // push the current time into the queue
        queue.push(curr[1]);
        // sort the queue by the ending times
        queue.sort((a,b) => a-b);
        // update the numRooms
        numRooms = Math.max(numRooms, queue.length);
    }
    
    return numRooms;
};