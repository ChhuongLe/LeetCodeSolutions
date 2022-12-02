/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;
    // traverse through the list until `null` is found 
    // if carry still has a value, at the end, add it to the result (i.e. if only  8 and 8 are passed in)
    while (l1 || l2 || carry) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;

        // compute the new value
        let sum = v1 + v2 + carry;
        // if there is a carry
        carry = Math.floor(sum/10);
        curr.next = new ListNode(sum%10);

        // update pointers
        curr = curr.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }


    return dummy.next;
};
