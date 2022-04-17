/**

 * @param {string[]} transactions
 * @return {string[]}
 */

/*
    conditions for invaild transactions:
        1. amount of the transaction exceeds 1000
        2. transaction occurs within 60 mins 
        
    algorithm:
        1. traverse through the transactions array
        2. seperate the categories 
        3. check if the person exsists in the map
            3a. if they do, push the city and time into the hash
            3b. if not, then create a new object for them in the hash
        4. check if the transaction is valid
            4a. if it is not, push the invalid transaction(s) into the invalid array
        5. return the final array of invalid transactions
*/
const isInvalid = (hash, t) => {
    let [name, time, amount, city] = t.split(',');
    // condition 1: if amount if greatrer than 1000, return true
    if(amount > 1000) {
        return true;
    } 
    // condition 2: if transaction was made in a different city as the same person within 60 minutes, return true
    let checkTrans = hash[name];
    // check the transactions within the hash
    for(let t of checkTrans){
        // if condition 2 is met
        if(city !== t.city && Math.abs(time - t.time) <= 60){
            // return true
            return true;
        }
    }
    // otherwise return false
    return false;
}

var invalidTransactions = function(transactions) {
    // initialize a hash
    let hash = {};
    // initialize an array to store the invalid transactions
    let invalid = [];
    // traverse through the array
    for(let t of transactions) {
        let [name, time, amount, city] = t.split(',');
        // check if the name exsists in the hash
        if(name in hash) {
            hash[name].push({time, city});
        } else {
            hash[name] = [{time, city}];
        }
    }
    // now we check if the transaction is invalid and update the invalid array
    for(let t of transactions){
        if(isInvalid(hash, t)) {
            invalid.push(t);
        }
    }
    // return invalid
    return invalid;
};