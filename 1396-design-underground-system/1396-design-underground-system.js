var UndergroundSystem = function() {
    // store {id: [stationName, time]}
    this.arrivals = new Map();
    // avgs map
    // store {A,B: [numPeople, totalTime]}
    this.avg = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */

/*
    takes customer ID, stationName, and time checked in
*/
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.arrivals.set(id,[stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */

/*
    from here, create unique key using the start station and end station
    calculate the difference between endTime and startTime
    update if the map already contains the unique key, otherwise initialize the new start and end stations with their respective values
*/
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    // store the startStation name and startTime 
    let [startStation, startTime] = this.arrivals.get(id);
    // calculate the difference current t - startTime
    let diff = t - startTime;
    // make a unique key to be easily referenced to
    let key = [startStation, stationName].join(",");
    
    // check average map to see if the key already exsists
    if(this.avg.has(key)){
        let [numPeople, totalTime] = this.avg.get(key);
        numPeople++;
        totalTime += diff;
        
        this.avg.set(key,[numPeople, totalTime]);
    } else {
        this.avg.set(key, [1, diff]);
    }
    this.arrivals.delete(id);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */

// average = totalTime/numPeople
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let key = [startStation, endStation].join(',');
    if(!this.avg.has(key)){
        return null;
    } else {
        let [numPeople, totalTime] = this.avg.get(key);
        return (totalTime/numPeople);
    }

};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */