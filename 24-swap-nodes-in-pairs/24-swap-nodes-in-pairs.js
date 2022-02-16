/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
    IOCE:
        input: Head - root of linked list
        output: Root of linked list
        constraints:
            list can be empty
        Edge Cases:
            List is not long enough to preform the swaps
*/
var swapPairs = function(head) {
    // base case
    // if there are not enought arguments to preform a swap
    if(!head || !head.next) {
        // return
        return head;
    }
    // use 3 pointers
    let curr = head, next = head.next, nextNext = next.next;
    // preform the swaps
    next.next = curr;
    curr.next = swapPairs(nextNext);
    return next;
};