/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];

    const dfs = (open, close, str) => {
        // if the string's length is 2 * n push it to the stack
        if(str.length === 2 * n) {
            res.push(str);
            return;
        }

        // check the open and closed parens
        if(open < n) dfs(open + 1, close, str + '(');
        if(close < open) dfs(open, close + 1, str + ')');
    }
    dfs(0, 0, '');
    return res;
};