/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let n1 = Number.MAX_SAFE_INTEGER;
    let n2 = Number.MAX_SAFE_INTEGER;
    let total = 0;

    for(let i = 0; i < nums.length; i++) {
       let currNum = nums[i];
       total += currNum;

       if(currNum%3 === 1) {
           n2 = Math.min(n2, n1+currNum);
           n1 = Math.min(n1, currNum);
       } 

       if(currNum%3 === 2) {
           n1 = Math.min(n1, n2+currNum);
           n2 = Math.min(n2, currNum);
       }
    }

    if(total%3 === 1) {
        total = total - n1;
    } else if (total%3 === 2) {
      total = total - n2;
    } 
    
    return total;
};
