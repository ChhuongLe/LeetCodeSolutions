/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.backArr = [homepage];
    this.forwardArr = [];
};

/** 
 * @param {string} url
 * @return {void}
 */

 // add to back array 
 // resets forward array
BrowserHistory.prototype.visit = function(url) {
    this.backArr.push(url);
    this.forwardArr = [];
};

/** 
 * @param {number} steps
 * @return {string}
 */

 // traverse number of `steps` until either steps is 0 or back.length is 0
 // return the element
BrowserHistory.prototype.back = function(steps) {
    while (steps && this.backArr.length > 1) {
        this.forwardArr.push(this.backArr.pop());
        steps--;
    }
    return this.backArr[this.backArr.length - 1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps && this.forwardArr.length) {
        this.backArr.push(this.forwardArr.pop());
        steps--;
    }
    return this.backArr[this.backArr.length - 1]
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
