/**
 * @param {string} path
 * @return {string}
 */
/*
    IOCE:   
        Input: path - string
        Output: res - string
        Constraints: length will have at least 1 char value
        Edge Cases: No '.' or '/' or '_'
*/
/*
    Algorithm:
        Split the string in to an array of char
        iterate through the strings and search for cases 
        if a case is found, fix it 
        update the array
        return the array concatenated
        
        The path starts with a single slash '/'
        Any two directories are separated by a single slash '/'.
        The path does not end with a trailing '/'.
        The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
*/
var simplifyPath = function(path) {
    let stack = [];
    // first split the path into an array of chars
    path = path.split('/');
    // iterate through the array 
    for(let char of path){
        // if char is a blank space or if it has a period, continue
        if(char === '.' || char ==='') continue;
        // otherwise if it is a '..' pop it out
        if (char=== '..') stack.pop();
        // otherwise, push it into stack
        else stack.push(char);
    }
    // join and add '/' at the beginning and '/' in between the routes
    return '/'+stack.join('/');
};