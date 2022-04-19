// use the set data structure to develop this randomized set
var RandomizedSet = function() {
    this.set = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
// function:
    // insert val if it is not present, return true if it was not present
    // if a value is present, return false
RandomizedSet.prototype.insert = function(val) {
    if(this.set.has(val)) {
        return false;
    } else {
        this.set.add(val);
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
// function:
    // removes a value if the set has the value and returns true
    // if the set does not have the value, return false
RandomizedSet.prototype.remove = function(val) {
    if(this.set.has(val)) {
        this.set.delete(val);
        return true;
    } else {
        return false;
    }
    
};

/**
 * @return {number}
 */
// returns a random element from the set
RandomizedSet.prototype.getRandom = function() {
    // get all the elements from the set
    let el = Array.from(this.set);
    // return a random number from the array
    return el[Math.floor(Math.random() * el.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */