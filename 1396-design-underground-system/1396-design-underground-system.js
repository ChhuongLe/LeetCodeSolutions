
var UndergroundSystem = function() {
    this.arrival = new Map();
    this.avgs = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    // first set the unique id key with its corresponsding time and station name
    this.arrival.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
* @return {void}N
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    // find the id and get the starting station and the time they arrived
    const [startStation, time] = this.arrival.get(id);
    // create a unique key using the startStation and the current stationName
    const key = [startStation, stationName].join(",");
    // now check if the avgs map has the key
    if(this.avgs.has(key)){
        // update the count and total
        let [total, count] = this.avgs.get(key);
        // calculate the current time that it took for this particular customer to arrive to this station
        let diff = t - time;
        // increase the count by one person
        count += 1;
        // update the total
        total = total + diff;
        // update the avgs map
        this.avgs.set(key, [total,count]);
    } else {
        //otherwise, create a new key and value
        let diff = t - time;
        this.avgs.set(key,[diff, 1]);
        
    } 
    // remove the customer id from the arrivals map as they've already checkout of the system
    this.arrival.delete(id);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    // calculate the average by finding the key from startStation and endStation
    let key = [startStation, endStation].join(",");
    if(this.avgs.has(key)){
        const [total, count] = this.avgs.get(key);
        return total/count;
    }
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */