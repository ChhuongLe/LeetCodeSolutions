/**
 * @param {string[]} transactions
 * @return {string[]}
 */

 /*
    Conditions for invalid transations:
    1. If amount spent is > $1000
    2. If transation occurs within 60 minutes with the same name in a DIFFERENT city

    Algorithm: Using a hash map
        1. Traverse through the array
            1a. Split the array into categories: [name, time, spent, location]
        2. begin adding to the hash the list of transactions with the key being the person's name
            2a. example: {alice: [{time: 20, location: mtv}, {time: 50, location: beijing}]}
        3. check if the transaction is invalid
        4. return the invalid array

    isInvalid function:
        1. Traverse through the hash
        2. check for the above invalid conditions
            2a. if they are met, add the transaction into the invalid array
 */
const isInvalid = (transaction, hash) => {
    let [name, time, amount, location] = transaction.split(',');

    // condition 1: spent over 1000
    if(amount > 1000) {
        return true;
    }
    
    // condition 2: transaction occured within 60 minutes of each other in a DIFFERENT city
    let otherTransactions = hash[name];
    for(const t of otherTransactions) {
        if(location !== t.location && 60 >= Math.abs(time - t.time)) {
            return true;
        } 
    }
    return false;
}

var invalidTransactions = function(transactions) {
    // initialize the hash map invalid array to return
    let transactionHash = {}, invalid = [];

    // traverse through the transations
    for(const t of transactions) {
        let [name, time, spent, location] = t.split(',');

        // add to transactionHash
        if(transactionHash[name]) transactionHash[name].push({time, location});
        else transactionHash[name] = [{time, location}];
    } 

    //after populating the hash, traverse through the hash and check if there are invalid transactions
    for (const t of transactions) {
        if(isInvalid(t, transactionHash)) {
            invalid.push(t);
        }
    }
    return invalid;
}; 
