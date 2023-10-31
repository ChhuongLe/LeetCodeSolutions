/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
    Input: Array of integers - nums
    Output: Number of triplets chosen from array - result
    Constraints: num1 + num2 > num3 for it to be true   
    Example: 
        [2,2,3,4]
            2 + 2 > 3 true
            2 + 2 > 4 false
            2 + 3 > 4 true
            2 + 3 > 4 true 
        result = 3

    Brute force method: (O(n)^3)
        Traverse through the array and check every possibility using a helper function to check validity
 */
var triangleNumber = function(nums) {
    if(nums.length < 3) return 0;
    let result = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                const [a ,b ,c] = [nums[i], nums[j], nums[k]];
                if(is_valid_triangle(a,b,c)) result += 1;
            }
        }
    }
    return result;
};

const is_valid_triangle = (a, b, c) => {
    return (
        a + b > c &&
        b + c > a && 
        c + a > b
    )
}