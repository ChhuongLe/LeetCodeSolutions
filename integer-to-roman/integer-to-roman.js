var intToRoman = function(num) {
    let theMap = new Map([
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9,"IX"],
        [5, "V"],
        [4,"IV"],
        [1,"I"],
    ]);
    
    // If num is present in the hash, simply return the key if the value is found
    if(theMap.has(num)) {
        return theMap.get(num);
    }

    // iterate using a sum value to populate a result string
    let result = "";

    let obj = theMap.keys();

    while (num > 0) {
      let hashKey = obj.next().value;
      let temp = 0;
      temp = num - hashKey;
      if (temp >= 0) {
        // reset the iterator back to original state to check all possible values
        obj = theMap.keys();
        // update input 
        num -= hashKey;
        result += theMap.get(hashKey);
      }
    }
    return result;
};