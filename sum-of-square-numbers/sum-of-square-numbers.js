/**
 * @param {number} c
 * @return {boolean}
 */
/* IOCE: 
       Input: Integer - number "c" 
       Output: Boolean - True or False depending if c does have a sum of squares 
       Constraints: 0 <= c <= 2^31 - 1 (positive 32 bit number) 
       Edge Cases: None 
*/

const judgeSquareSum = (c) => {
    // compare a^2 first iterativley where a^2 is less than c
    // anything greater will not work in a summation
    for (let a = 0; a * a <= c; a++) {
        // console.log('this is a: '+ a);
        // console.log('this is c: ' + c);
        // console.log('this is a2: ' + a*a);
        
        // set b^2 to be the difference of c and a^2 
        let b = c - a*a;
        // console.log('this is b before sqrt: ' + b);
        b = Math.sqrt(b);
        
        // console.log('actual b: '+ b)
        // console.log('rounded b: '+ Math.floor(b));
        
        // if there is an exact number that can be found
        if (b === Math.floor(b)) {
            // return true
            return true;
        }
    }
    // if the loop completes, then return false as no exact integer was found
    return false;
}