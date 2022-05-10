/**
 * @param {string[]} timePoints
 * @return {number}
 */

/*
    algorithm:
        1. sort the times from least to greatest
        2. convert all the times to minutes, 00:00 = 0 minutes
                                             23:59 = 1399 minutes
        3. traverse through the array
        4. find the smallest difference between each of the numerical values 
        5. return the smallest difference
*/
var findMinDifference = function(timePoints) {
    timePoints.sort()
    
    // convert the times to minutes
    timePoints = timePoints.map(el => {
        let [hour, minutes] = el.split(':');
        return Number(hour) * 60 + Number(minutes);
    });
    
    timePoints.push(24*60 + timePoints[0]);
    let minDiff = Infinity; 
    for(let i = 1; i < timePoints.length; i++) {
        minDiff = Math.min(minDiff, timePoints[i]-timePoints[i-1]);
    }
    return minDiff;
};