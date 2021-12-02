/**
 * @param {number[][]} rectangle
 */

// class SubrectangleQuries, set rectangle to be the input "rectangle"
var SubrectangleQueries = function(rectangle) {
    this.rectangle = rectangle;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */

// updates all values in the passed in rectangle with the newValue
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    // iterate through the rectangle 
    for(let i = 0; i < this.rectangle.length; i++) {
        // iterate through the rectangle from the columns
        for (let j = 0; j < this.rectangle[i].length; j++){
            // if the value being viewed is within (row1, row2) && (col1, col2) replace the value
            if ((i >= row1 && i <= row2) && (j >= col1 && j <= col2)){
                  this.rectangle[i][j] = newValue;
            }
        }
    }
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */

// return rectangle value located @ [row][col]
SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.rectangle[row][col];
};

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */