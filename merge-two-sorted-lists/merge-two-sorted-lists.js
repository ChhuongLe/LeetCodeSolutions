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
var mergeTwoLists = function(l1, l2) {
    // initialize another list to store the concatenated list
    let mergedList = {val: Number.MIN_SAFE_NUMBER, next: null};
    // initialize a ctr variable
    // this is to keep mergedList as the head
    let ctr = mergedList;
    // while the end of l1 or end of l2 has not been reached
    // continue iterating through
    while (l1 && l2) {
    // if l1's val is greater
        if (l1.val > l2. val) {
            ctr.next = l2;
            l2 = l2.next;
        } else {
           ctr.next = l1;
           l1 = l1.next;
        }
        ctr = ctr.next;
    }
    ctr.next = l1 || l2;

    return mergedList.next;
};