/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    // initialize a list
    this.list = new Array(n);
    // initialize a pointer that starts at element 0
    this.ptr = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */

// needs to be able to update the list 
// also requried to return the elements at the current step 
    // (i.e. in the example step 1 should return the array at 0)
OrderedStream.prototype.insert = function(idKey, value) {
    // take the idKey and subtract 1 from to line it up with the 0 indexing of arrays
    this.list[idKey-1] = value;
    
    // initialize the resulting array
    let result = []; 
    // while p still has values, push the values into the result array and move the pointer forward
    while(this.list[this.ptr]){
        result.push(this.list[this.ptr]);
        this.ptr++;
    }
    // return the resulting array
    return result;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */