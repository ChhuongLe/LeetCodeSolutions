/**
 * @param {number[][]} intervals
 * @return {number}
*/

/*
    IOCE:
        Input: Array of times where people have meetings
        Output: Mininum number of rooms that are required to hold all these meetings
        Constraints: Intervals are never empty
                     Start times < End times
        Examples: 
            1. [[0, 30], [5, 10], [15, 20]] => [0, 30] & [5, 10] overlap
                                               [5, 10] & [15, 20] do not overlap
                                               [0, 30] & [15, 20] overlap
                                               
                                               minimum amount of rooms needed = 2
            2. [[7, 10], [2, 4]] => [7, 10] & [2, 4] do not overlap
                                    
                                    minimum amount of rooms needed = 1
                                    
    algorithm:
        1. first sort the intervals by start time
        2. use a priority queue to keep track of meetings' ending times
        3. traverse through the intervals
            3a. check if there is anything in the queue
            3b. if not, then insert the first ending time
            3c. if there is, check the ending interval and compare it to the current interval's start time 
                3ca. if the start time is greater than or equal to the item in the stack, allocate a new room for the new meeting
                3cb. otherwise, insert the new ending interval
            3d. compare the number of rooms and compare it to the max number of rooms that were required
        4. return the final value
*/

const minMeetingRooms = (intervals) => {
    // consider only the ending times as this will determine a new room is needed or not
    const sortFunc = (a,b) => a-b, queue = new PriorityQueue(sortFunc);
    
    intervals.sort((a,b)=> a[0] -b[0]);
    console.log(intervals);
    let numRooms = 0;
    
    intervals.forEach(interval => {
        if(queue.size > 0 && queue.peek() <= interval[0]) {
            queue.pop();
        }
        
        queue.insert(interval[1]);
        
        numRooms = Math.max(numRooms, queue.size);
    });
    
    return numRooms;
};

class PriorityQueue {
    constructor(sortFunc) {
        this.sortFunc = sortFunc;
        this.heap = [];
    }
    // insert a variable into the front of the heap, then sort it according to the function
    insert(val){
        this.heap.unshift(val);
        this.heap.sort(this.sortFunc);
    }
    // extracts the first value from the heap
    pop() {
        let val = this.size === 0 ? null : this.heap.shift();
        return val;
    }
    // check the value at the beginning of the heap
    peek() {
        let val = this.size === 0 ? null : this.heap[0];
        return val;
    }
    // keep track of the size of the heap
    get size() {
        return this.heap.length;
    }
}
