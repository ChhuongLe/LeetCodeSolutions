
var UndergroundSystem = function() {
    this.arrivals = new Map();
    this.avgs = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */

// takes a unique customer ID, stationName, and the time they arrived 
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    // id: [stationName, t] 
    this.arrivals.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */

// takes a unique ID, stationName, and the time they checked out of the station
// find the start station and store it into to referencable variables

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation, time] = this.arrivals.get(id);
    
    // find the difference of time between end station and start station
    let diff = t - time;
    
    let key = [startStation, stationName].join(',');
    // check if avgs map contains the unique key 
    if(this.avgs.has(key)){
        // update the totalTime and numPeople if the map already contains the key
        let [totalTime, numPeople] = this.avgs.get(key);
        totalTime += diff;
        numPeople++;
        this.avgs.set(key, [totalTime, numPeople]);
    } else {
        this.avgs.set(key, [diff, 1]);
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let key = [startStation, endStation].join(',');
    
    if(this.avgs.has(key)){
        const [totalTime, numPeople] = this.avgs.get(key);
        return totalTime/numPeople;
    }
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */