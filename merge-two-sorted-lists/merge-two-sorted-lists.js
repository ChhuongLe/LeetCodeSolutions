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

/* IOCE:
    input: 2 linked lists, sorted in non-decreasing order
    output: 1 linked list, sorted in non-decreasing order
    constraints: none
    edge cases: none
*/
 
var mergeTwoLists = function(l1, l2) {
    // initalize a dummy head node
    let mergedList = {val: Number.MIN_SAFE_INTEGER, next: null};
    // initialize a counter variable to keep track of the current node
    // start with the dummy head
    let ctr = mergedList;
    // iterate through the linked lists while there are still nodes to compare 
    while (l1 && l2) {
        // if the node in the second list is less than the node in the first list
        if(l1.val > l2.val) {
            // set the current node's link to l2's node
            ctr.next = l2;
            // increment to next node in l2
            l2 = l2.next;
        } else {
            // otherwise set the current node's link to l1
            ctr.next = l1;
            // increment to next node in l1
            l1 = l1.next
        }
        // move onto the next node
        ctr = ctr.next;
    }
    // if one of the lists has nothing left to compare, point the list's next to the remaining nodes in the list
    // otherwise, point to null
    ctr.next = l1 || l2;
    
    // return the merged linked list
    return mergedList.next;
};