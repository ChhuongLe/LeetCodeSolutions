/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*
    IOCE:
        input: head - node of a linked list, n - integer
        output: head - node of a linked list
        constraints: # of nodes can range from 0 -> 30
        edge cases: none to consider
*/
var removeNthFromEnd = function(head, n) {
    let slow = head, fast = slow;
    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if(!fast){
        return head.next;
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};