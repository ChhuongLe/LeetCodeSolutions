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
    // Create a new ListNode to store the sum of L1 and L2  called rootNode
    let rootNode = new ListNode(0);
    let node = rootNode;
    let sum = 0;
    let carry = 0;
    
    // iterate through the node lists until the end is reached
    while (l1 || l2 || sum > 0) {
        // add first node from L1 to sum variable
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        // add first node from L2 to sum variable
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        // check if the sum is > 9
        if (sum > 9) {
            // store thed difference of sum from 10
            carry = 1;
            sum = sum - 10;
        }
        // append the sum into rootNode
        node.next = new ListNode(sum);
        node = node.next;
        
        sum = carry;
        carry = 0;
    }
    return rootNode.next;
};