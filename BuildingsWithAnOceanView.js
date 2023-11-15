/**
 * @param {number[]} heights
 * @return {number[]}
 */

 /*
    IOCE:
        Input: heights - array of integers representing heights of buildings
        Output: result - array of integers represenitng the index of the buildings in the heights array wuth views of the ocean
        Contraints: Ocean is to the "right" of the building. Building has an ocean view if the building to the right has a "smaller" height
        Example:
        [4,2,3,1]
        
        compare 4 to 2 index 0 has a view
        compare 2 to 3 index 1 does not have a view
        compare 3 to 1 index 2 does have a view
        last index has nothing blocking it, index 3 has a view by default
        result = [0,2,3]

        more complicated example:
        [1,3,2,4]

        store 1 into a stack
        stack[0] < heights[1] index 0 does not have a view, stack.pop()
        store 3 into the stack
        stack[0] > heights[2] index 1 does have a view
        store 2 into the stack
        stack[0] < heights[3] index 1 not longer has a view
        stack[1] < heights[3] index 2 does not have a view
        stack.pop()
        stack.pop()
        index 3 has nothing after, has a view by default 
        stack = [3]
 */ 
var findBuildings = function(heights) {
    let stack = [];
    for(let i = 0; i < heights.length; i++) {
        while(stack.length && heights[i] >= heights[stack[stack.length-1]]) {
            stack.pop()
        }
        stack.push(i);
    }
    return stack;
};
