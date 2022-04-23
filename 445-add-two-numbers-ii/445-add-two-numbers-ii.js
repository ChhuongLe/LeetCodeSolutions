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
    IOCE: 
        Input: l1 & l2 - 2 linked lists 
        Output: linked list
        Constraints: Will always has a node
        Edge Cases: Carry over at the end where there is nothing to add left
    
    Algorithm: 
        1. reverse the list (reverse the list to add the numbers from the 1's position and then move forward)
        2. Initalize the result list and the carry
        3. traverse through the list until we reach both the ends of the list
            3a. if an end is reached, set their numerical value to be added to be 07y
            3e. move to the next items in the list
*/

const reverseList = (head) => {
    let lastNode = null;
    
    while(head) {
        let tmp = head.next;
        head.next = lastNode;
        lastNode = head;
        head = tmp;
    }
    // return list
    return lastNode;
};

const addTwoNumbers = (l1, l2) => {
    // first reverse the list
    l1 = reverseList(l1);
    l2 = reverseList(l2);
    
    // initialize a resulting list and a carry for the carry overs
    let resList = null, carry = 0;
    // traverse both lists while they have something in them
    while(l1 || l2) {
        // check if the list has reached an end
        let n1 = l1 !== null ? l1.val : 0;
        let n2 = l2 !== null ? l2.val : 0;
        
        // calculate the sum of the two numbers by adding the two + the carry and modding it by 10 to get a single 1's digit
        let sum = Math.floor(carry + n1 + n2)%10;
        carry = Math.floor(carry + n1 + n2)/10;
        
        // update value by adding to the front of the list
        let curr = new ListNode(sum);
        curr.next = resList;
        resList = curr;
        
        // move along the lists 
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }
    // edge case where the carry over is at the end and did not get calculated
    if(Math.floor(carry) !== 0) {
        let curr = new ListNode(Math.floor(carry));
        curr.next = resList;
        resList = curr;
    }
    return resList;
};