/**
 * @param {string} homepage
 */

var BrowserHistory = function(homepage) {
    this.page = {
        url: homepage,
        next: null,
        back: null
    };
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.page.next= {
        url: url,
        next: null,
        back: this.page
    };
    this.page = this.page.next;
};

/** 
 * @param {number} steps
 * @return {string}
 */

BrowserHistory.prototype.back = function(steps) {
    while(steps !== 0 && this.page.back) {
        this.page = this.page.back;
        steps--;
    }
    return this.page.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps !== 0 && this.page.next) {
        this.page = this.page.next;
        steps--;
    }
    return this.page.url;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */