/**
 * @param {number[]} nums
 * @return {number}
 */

// Traversal through the array and subtract every subsequent number without having to set everything to 0
/*
    nums = [0,1,3,5,5] after sorty
    nums = [0,1,2,4,4] after subtraction steps = 1
    nums = [0,1,2,2,2] steps = 2
    nums = [0,1,2,2,0] steps = 3

    knowing this now, we can look at the number of unique integers and count how many steps to get to all zero thorugh that
*/
// var minimumOperations = function(nums) {
//     const len = nums.length;
//     // sort the integers in ascending order
//     nums.sort((a,b)=> a-b);
//     // initialize number of steps
//     let steps = 0;

//     // traverse through the array
//     for(let i = 0; i < len; i++) {
//         // if nums at i is 0, skip the traversal
//         if(nums[i] === 0) {
//             continue;
//         }
//         // increment steps
//         steps++;
//         // subtract current element from all subsequent positives as it is already sorted
//         for(let j = i + 1; j < len; j++) {
//             nums[j] -= nums[i]
//         }
//     }
//     return steps;
// };

const minimumOperations = (nums) => {
    const set = new Set(nums);

    return set.size - (set.has(0) ? 1 : 0);
}