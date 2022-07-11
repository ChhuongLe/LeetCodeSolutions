/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

/*
    IOCE: 
        input: boxTypes -> array of arrays of integers
                           first element is the number of boxes
                           second element is the number of units 
                           
               truckSize -> integer representing how many boxes the truck can carry
        output: result 
        constraints: none
        edge cases: none
        
    example: 
        [[1,2], [2,3], [3,1]] with truckSize = 4
        
    (1*2) + (2*3) + (3*1) =  2 + 6 + 3 = 11 units 
    
    To maximize the number of units, sort according to number of units 
    
    [[2,3], [1,2], [3,1]]
    
    2*3 + 1*2 + 1*1 = 9 units 
*/

var maximumUnits = function(boxTypes, truckSize) {
    // sort according the largest number of units first
    boxTypes.sort((a, b) => b[1]-a[1]);
  
    let numUnits = 0;
    for (const [boxes, units] of boxTypes) {
        // check the number of boxes the truck can store at the moment
        const numBoxes = Math.min(boxes, truckSize);
        numUnits += units * numBoxes;
        truckSize -= numBoxes;
        // if truckSize ever reaches 0, break out of the loop
        if (!truckSize) {
            break;
        }
    }
    // return the maximum total number of units
    return numUnits;
};