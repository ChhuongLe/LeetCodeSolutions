/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/*
    Brute force method:
        push all the values into an array
        sort the array
        convert it back into a linked list
*/
var mergeKLists = function(lists) {
    if(!lists || !lists.length) return null;
    
    let arr = [], res = new ListNode(-1); // -1 is a place holder
    
    // traverse through each list
    lists.forEach(list => {
        // current list being viewed
        let cur = list;
        while(cur) {
            // while the current list being looked at is not empty
            arr.push(cur.val);
            cur = cur.next;
        }
    });
    
    let cur = res;
    // sort the array
    arr.sort((a,b) => a-b);
    // return the sorted array back into a linked list
    arr.forEach(node => {
        let temp = new ListNode(node);
        cur.next = temp;
        cur = cur.next;
    });
    // return the final linked list
    return res.next;
};