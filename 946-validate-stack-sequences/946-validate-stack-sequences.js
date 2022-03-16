/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
/*
    IOCE: 
        Input: pushed - array 
               popped - array
        Output: Boolean
        Constraints: pushed and popped are always of equal length 
                     pushed will always have an element
        Edge Cases: None to consider
*/

/*
    Algorithm:
        Push all values to stack
        pop values if they are the next value to pop
        check if stack is empty at the end
*/
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let i = 0;
    
    for(let num of pushed) {
        stack.push(num);
        while(stack.length && stack[stack.length-1] === popped[i]){
            stack.pop();
            i++;
        }
    }
    return stack.length === 0;
};