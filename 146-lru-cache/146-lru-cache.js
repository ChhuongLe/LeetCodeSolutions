/**
 * @param {number} capacity
 */

/*
    Need to know when capacity has been reached
    Use a map because it stores the order that it was inserted in
*/
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */

/*
  if the key is not present in the cache, return -1
  
  if it does exist, store the value, and re-insert the key and value to update that it was recently used
  return the value at the end
*/
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) {
        return -1;
    }
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

/*
    if the cache has the key already, delete it and then update the cache
    check if the capacity is full
        if it is then remove the top of the map
*/
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.cache.delete(key);
    }
    this.cache.set(key, value);
    if(this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */