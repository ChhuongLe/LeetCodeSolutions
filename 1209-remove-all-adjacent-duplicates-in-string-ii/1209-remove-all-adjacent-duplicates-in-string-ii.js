/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
/*
    k - represents the duplicates to remove
        i.e if k = 3 "aa" will not be removed but "aaa" will be
        
        algorithm: 
            1. iterate through the string s
            2. push the number of times the same letter appears in the stack
                2a. when the number hits k, pop the number of letters out of the stack
            3. continue iterating through the stack and see if the next letter is the same as the previous
                3a. if it is, increment the count of that letter
                3b. otherwise initialize the value to 1
            4. return the final result
*/
var removeDuplicates = function(s, k) {
    // initialize the stack
    let stack = [];
    // iterate through the string
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        // if we're at the beginning or if the char at i is different from the char previously, push to stack 1
        if(i === 0 || s[i] !== s[i-1]){
            stack.push(1);
        } else {
            // otherwise a match is found and increment the value at the top of the stack
            stack[stack.length-1]++;
            
            // check if the top of the stack is equal to k
            if(stack[stack.length-1] === k){
                // pop it out of the stack
                stack.pop();
                // remove the duplicates from the string arr
                s.splice(i-k+1, k);
                // move i back k positions to continue checking for duplicates
                i = i - k;
            }
        }
    }
    return s.join('');
};