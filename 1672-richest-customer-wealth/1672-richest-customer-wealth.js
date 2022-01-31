/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxValue = Number.MIN_SAFE_INTEGER;
    let temp = 0;
    // iterate through the matrix
    let numAccounts = accounts.length;
    let accountLen = accounts[0].length;
    // iterate through the accounts
    for(let i = 0; i < numAccounts; i++){
        // iterate through the account storage
        for(let j=0;j < accountLen; j++) {
            temp += accounts[i][j];
        }
        maxValue = Math.max(maxValue, temp);
        console.log(maxValue);
        //reset temp
        temp = 0;
    }
    return maxValue;
};