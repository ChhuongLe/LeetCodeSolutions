/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let len = arr.length;
    let i = 0;
    
    if (len < 3) {
        return false;
    } 
    // walking up the mountain
    while(i+1 < len && arr[i] < arr[i+1]) {
        i++;
    }
    // peak of the mountain cannot be at the start or at the end
    if(i === 0 || i === len-1) {
        return false;
    }
    // walking down the mountain
    while(i+1 < len && arr[i] > arr[i+1]) {
        i++;
    }
    return i === len-1;
};