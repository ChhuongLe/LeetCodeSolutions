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
        Input: head - node of a linked list
        Output: head - node of a linked list
        Constraints: will always be a viable node 
        Edge Cases: none to consider
*/

// use two pointers to find the middle of the linked list
var middleNode = function(head) {
    let slow = head, fast = slow;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};