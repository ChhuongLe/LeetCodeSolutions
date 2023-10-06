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
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let node = head;
    let count = 1;

    while(node.next) {
        if (count === n) {
            prev = prev.next;
        } else {
            count++;
        }
        node = node.next;
    }
    prev.next = prev.next.next;
    return dummy.next;
};