/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.arr = [];
    this.size = size;

};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.arr.push(val)
    let sum = 0, count = 0;
    for(let i = this.arr.length - 1; i >= 0; i--) {
        if(count === this.size) break;
        count++;
        sum += this.arr[i];
    }

    return sum/count;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */