/**
 * @param {string} s
 * @return {boolean}
 */
// check the letters at the start and compare it to the end of the string
    // if a discrepency is found, check at a different position and see if a deletion is possible
    // if a deletion is possible, then return true
    // if more than one deletion is necessary, then return false

const checkPalindrome = (s, i, j) => {
    while(i < j) {
        if(s.charAt(i) !== s.charAt(j)) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
}

var validPalindrome = function(s) {
    let i = 0, j = s.length-1;
    
    // iterate through the string and check for discrepencies
    while(i < j) {
        // if one is found
        if(s.charAt(i) !== s.charAt(j)) {
            // check from either "deleting" from the front or the back
            // if both return false, then it is not a palindrome
            return checkPalindrome(s, i, j-1) || checkPalindrome(s,i+1, j);
        }
        // otherwise if not discrepencies are found, move the pointers
        i++;
        j--;
    }
    // return true if no discrepencies are found
    return true;
};