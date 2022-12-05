/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    // if needle is empty
    if (needle === "" || haystack === needle) return 0;
    // if the haystack length is less than the needle
    if (haystack.length < needle.length) return -1;

    let left = 0, right = needle.length;
    while (left < haystack.length) {
        // create a substring
        let window = haystack.slice(left, right);
        // compare it
        if (window === needle) {
            // if the are equal, return
            return left;
        }  else {
            // otherwise increment the window
            left++;
            right++;
        }
    }
    // cannot find so return -1
    return -1;
};
