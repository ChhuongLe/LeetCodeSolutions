/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result = 0;
    
    const a = '++X';
    const b = 'X++';

    for(i = 0; i < operations.length; i++) {
        if(operations[i] === "X++" || operations[i] === "++X"){
            result++;
        } else {
            result--;
        }
    }
    return result;
};