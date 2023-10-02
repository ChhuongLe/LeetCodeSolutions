/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxHeight = Number.MIN_SAFE_INTEGER;

    let l = 0, r = height.length-1;

    while(l < r) {
        let area = 0;

        if(height[l] < height[r]) {
            area = height[l]*(r-l);
            l++;
        } else {
            area = height[r]*(r-l);
            r--;
        }

        maxHeight = Math.max(maxHeight, area)
    }

    return maxHeight;
};