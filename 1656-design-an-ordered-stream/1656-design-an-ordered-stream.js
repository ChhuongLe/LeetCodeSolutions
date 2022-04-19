/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    // initialize an array of size n
    this.stream = new Array(n);
    // initialize a ptr variable to keep track of where we are 
    this.ptr = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */

// function: 
    /*
        algorithm: 
            1. insert the value into the idKey indicated 
            2. return the largest chunk of the the currently inserted values 
    */
OrderedStream.prototype.insert = function(idKey, value) {
    // insert the value into the idKey
    this.stream[idKey-1] = value;
    
    // return the largest possible chunck
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