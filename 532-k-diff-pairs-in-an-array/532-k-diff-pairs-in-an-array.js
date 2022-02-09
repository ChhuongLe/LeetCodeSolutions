/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
    IOCE: 
        Input: nums - array of integers, k - integer
        Output: result - integer
        Constraints:
            nums.length > 0
        Edge Cases: 
            k = 0
            copies of a pair

    Example:

        nums = [1, 3, 1, 5, 4, 1]   k = 0

        (1,3) k = 2 // exclude
        (1,1) k = 0 // this passes
        .
        .
        . 
        (5,4) k = 1 // exclude
        (1,1) k = 0 // has already been seen, ignore

        output: 1 since there was only 1 unique pair
*/
//brute force approach
var findPairs = function(nums, k) {
    if (nums.length === 1){
        return 0;
    }
    // sort the numbers to make viewing unique pairs simpler
    nums.sort((a,b)=>{
        return a-b;
    });
    // use a hash to store the unique values
    let hash = {};
    // use of two pointers
    for(let i = 0; i < nums.length; i++){
        let ptr1 = nums[i];
        for (let j = i+1; j < nums.length; j++){
            let ptr2 = nums[j];
            // use absolute value to calculate the difference
            let diff = Math.abs(ptr1 - ptr2);
            // if diff is equal to k
            if (diff === k) {
                // check if the pair is in the hash
                if(!hash[[ptr1,ptr2]]){
                    // if not, update the hash
                    hash[[ptr1,ptr2]] = 1;
                }
            }
        }
    }
    // return the number of keys in the hash
    return Object.keys(hash).length;
};