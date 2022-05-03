/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*      
    Algorithm: Time complexity O(n) where n is the number of elements in the nums array
      1.initialize a count for changes
      2.traverse through the array
      3.if a condition occurs where nums[i] < nums[i-1]
        3a. check if a violation has been found
        3b. if yes, then return false right away
        3c. otherwise, consider nums[i-2] to fix the violation
            3ca. if the violation is at index 1, we will have to use nums[i-1] = nums[i] to fix the violation
      4. if traversal ends sucessfully, return true
        
*/
var checkPossibility = function(nums) {
    let violations = 0;
    
    for(let i=1; i<nums.length; i++) {
        if(nums[i] < nums[i-1]) {
            if(violations === 1) {
                return false;
            }
            violations++;
            
            if(i < 2 || nums[i-2] <= nums[i]) {
                nums[i-1] = nums[i];
            } else {
                nums[i] = nums[i-1];
            }
        }
    }
    return true;
};