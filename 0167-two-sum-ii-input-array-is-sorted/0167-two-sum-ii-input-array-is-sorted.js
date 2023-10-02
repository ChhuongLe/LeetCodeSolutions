/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let hash = {}, i = 0;
    for(const num of numbers) {
        hash[num] = i;
        i++;
    }
    let res = [], j = 0;
    for(const num of numbers) {
        let diff = target - num;
        if(hash[diff] && j !== hash[diff]) {
            res.push(j+1, hash[diff]+1);
            break;
        }
        j++
    }
    return res;
};