/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/*
    IOCE: 
        Input:
            numbers - array of integers
            target - integer
        Output: 
            return an array of integers
        Constraints: 
            numbers array will always have at least 2 numbers in the array
            may not use the same element twice 
            index is represented by array index + 1
        Edge cases: 
            None to consider
        
*/

/*
    Example: 
        Input: 
            Numbers = [2, 7, 11, 15]
            Target = 9
        
        Algorithm:
            Use a hash table to store the number and its index 
            
                numObj = {
                    2:  1,
                    7:  2,
                    11: 3,
                    15: 4
                }
                
            Then iterate through the numbers array and find the difference between the target and the first value
            
                diff = 9 - 2 //diff = 7
                
            Use the built in function of an object "hasOwnProperty" to find if diff exsists within the hash
            and to see if it a unique value. If it holds true, return the index of the current value and the value in numObj[diff]
            
                if(numbObj.hasOwnProperty(diff) && i !== numbObj[diff]) {
                    return [i+1, numObj[diff]];
                }
        
*/
var twoSum = function(numbers, target) {
    // initialize an object to hold the key value pairs
    let numObj = {};
    // initialize diff once to save on memory
    let diff = 0;
    // iterate through the numbers array
    for(let i = 0; i < numbers.length; i++) {
        // create the key value pairs
        numObj[numbers[i]] = i+1;
    }
    // iterate though the numbers array again
    for(let i = 0; i < numbers.length; i++) {
        // find the difference 
        diff = target - numbers[i];
        // if the difference is found in the hash table and it is a unique value
        if(numObj.hasOwnProperty(diff) && i !== numObj[diff]) {
            // return the current index + 1 along with the value found in the hash in an array
            return [i+1, numObj[diff]];
        }
    }
};