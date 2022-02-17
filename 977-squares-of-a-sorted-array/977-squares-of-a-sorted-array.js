/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
    IOCE: 
        Input: nums - array of integers
        Output: result - array of integers
        Constraints: 
            Nums can never be empty
        Edge Cases: none
*/

const sortFunc = (a,b) =>{
    return a-b;
}

var sortedSquares = function(nums) {
    let res = [];
    for(index in nums){
        let currNum = nums[index];
        res.push(currNum*currNum);
    }
    return res.sort(sortFunc);
};