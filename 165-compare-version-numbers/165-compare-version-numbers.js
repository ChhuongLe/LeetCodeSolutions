/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

/*
    IOCE: 
        Input: version1 - integer
               version2 - integer
        Output: result - either -1, 1, or 0
                return -1 if version1 < version2
                return 1 if version1 > version2
                return 0 otherwise
        Constraints: version1 and version2 are valid numbers
                     only contain digits and '.'
                     exclude leading 0's
        Edge Cases: none to consider
*/
/* Example:
    version1 = 1.100
    version2 = 1.000100
    
    since leading 0's are exluded
    version2 = 1.100 which is equal to version1
    
    return 0
    
    version1 = 1.100.1
    version2 = 1.000100 -> 1.100
    
    split the numbers after the '.'
    
    v1Arr = [1, 100, 1]
    v2Arr = [1, 000100]
    
    is 1 > 1 no
    is 100 > 100 no
    is 1 > null yes
    
    return 1
*/

/*
    Remove all leading 0's after '.'
*/
var compareVersion = function(version1, version2) {
    let v1Arr = version1.split('.');
    let v2Arr = version2.split('.');
    let maxLen = Math.max(v1Arr.length, v2Arr.length);
    
    // iterate through the two arrays
    for(let i = 0; i < maxLen; i++){
        // use these as comparators for each number in the arrays
        // if it ends up null, default to 0
        let num1 = parseInt(v1Arr[i]) || 0;
        let num2 = parseInt(v2Arr[i]) || 0;
        
        // do nothing if both numbers are equal
        if(num1 === num2){
            continue;
        }
        // return 1 if num1 > num2 otherwise return -1 if num2 > num1
        return num1 > num2 ? 1 : -1;
    }
    // if iterating through the arrays results in nothing found, return 0
    return 0;
};