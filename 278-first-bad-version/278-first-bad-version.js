/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

/*
    IOCE:
        input: n - array of integers
        output: boolean
        constraints: 
            
*/
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // preform a bainry search
        let l = 0, r = n;
        
        while(l <= r) {
            let mid = l + Math.floor((r-l)/2);
            // if this is true
            if(isBadVersion(mid)) {
                // reduce the search in the older versions
                r = mid-1;
            } else{
                // otherwise go towards newer versions
                l = mid+1;
            }
        }
        return l;
    }
};