/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

/*
    IOCE:
        Input: n - integer (string length)
               k - integer (numerical value that the string must be equivelent to)
        Output: res - string
        Constraints: n will always be a number greater than 1
                     k will always be a number greater than n
        Edge Cases: none to consider
*/

/*
    Algorithm:
        set up a hash that stores all the numbers that pertain to the letters
        
        iterate through the hash and subtract the largest possible number from k
            push the letter into an array
            continue to do this until 0 is achieved
        join res array and return it
        
*/
var getSmallestString = function(n, k) {
    // make a res array with size n filled with 0's, these will later be replaced by other numbers
    let tmp =  new Array(n).fill(0);
    // initialize a hash with the letters and their values
    let letterHash ={
        z: 25,
        y: 24,
        x: 23,
        w: 22,
        v: 21,
        u: 20,
        t: 19, 
        s: 18,
        r: 17,
        q: 16,
        p: 15,
        o: 14,
        n: 13,
        m: 12,
        l: 11,
        k: 10,
        j: 9,
        i: 8,
        h: 7,
        g: 6,
        f: 5,
        e: 4,
        d: 3,
        c: 2,
        b: 1,
        a: 0
    };
    
    let end = tmp.length - 1;
    let remainder = k - tmp.length;
    // while remainder is still greater than 0 and the end has not been reached
    while (remainder > 0 && end >= 0){
        // check if the remainder is greater than 25
        if (remainder > 25){
            // if it is, then 25 must be subtracted from this value
            tmp[end] = 25;
            remainder -= 25;
        } else {
            // otherwise, 
            tmp[end] = remainder;
            remainder = 0;
        }
        end -= 1;
    }
    // tmp should have all the values that are associated with the letters in letterHash
    // convert them using a loop and push them into res
    
    // since Javascript does not have a built in way to get values using keys we have to write an iterative function
    Object.prototype.getValue = function(value) {
        for(let key in this){
            if(this.hasOwnProperty(key)){
                if(this[key] === value){
                    return key;
                }
            }
        }
    }
    // store it into res
    let res = [];
    res = (tmp.map((el)=>{
        return letterHash.getValue(el);
    }));
    
    //return the final result
    return res.join("");
};