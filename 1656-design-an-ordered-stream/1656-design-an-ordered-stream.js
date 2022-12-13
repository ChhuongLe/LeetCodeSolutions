/**
 * @param {number} n
 */

 // stream of size n 
var OrderedStream = function(n) {
    // when initialized, will create an array of size n
    this.stream = new Array(n);
    // initialize a pointer to traverse through the stream
    this.ptr = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */

 /*
    Steps:
        1. Insert the current id into the designated idKey in the stream
        2. Retrurn largest possible chunk of currently inserted values
 */
OrderedStream.prototype.insert = function(idKey, value) {  
    // insert value into designated index within stream
    this.stream[idKey - 1] = value;

    // returns largest possible chuck
    let res = [];
    while(this.stream[this.ptr]) {
        res.push(this.stream[this.ptr]);
        this.ptr++;
    }
    return res;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
