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

/*
    Algorithm: 
        1. Reverse the list so that we can add the ones digits first 
        2. traverse through the 2 lists until they're empty
            2b. add the two numbers, if its over 10, add it to the carry 
            2b. add the carry and the sum and add it to the total node
        3. return the final list 
*/

const reverse = (node) => {
    let last = null;
    
    while(node) {
        let temp = node.next;
        node.next = last;
        last = node;
        node = temp;
    }
    return last;
};

const addTwoNumbers = (l1, l2) => {
    l1 = reverse(l1);
    l2 = reverse(l2);
    let carry = 0, resList = null;
    
    while(l1 || l2) {
        // check if the value of l1 is null, if it isnt then store the value, otherwise store it as 0
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        
        // if a decimal value appears, then round down to the nearest integer value
        let sum = Math.floor(carry + val1 + val2)%10;
        carry = Math.floor(carry + val1 + val2)/10; 
        
        // update the resList
        let curr = new ListNode(sum);
        curr.next = resList;
        resList = curr;
        
        // move the list forward
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }
    
    // edge case where the carry is found at the very end
    if(Math.floor(carry) !== 0) {
        let curr = new ListNode(Math.floor(carry));
        curr.next = resList;
        resList = curr;
    }
    return resList;
};