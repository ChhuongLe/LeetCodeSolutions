/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
  

/* stack method: 
    1. traverse through doubly linked list while pointer has not hit null
    2. start at head of linked list
        2a. if a child exists, check if there exists a next. If there is, store the value into the stack for reference 
        2b. add the children to the curr pointer
        2c. once the child has been assigned, mark it as null
    3. check for the next value or if stack is not empty
        3a. add to the stack
    4. continue iteration
    5. return the final 
*/

var flatten = function(head) {
    // check if the linked list is empty
    if (!head) return head;

    let curr = head, stack = [];
    while(curr) {
        // a child exists
        if(curr.child) {
            // save the current's next position as a reference to come back to if it exists
            if(curr.next) stack.push(curr.next)
            // set the curr pointer's next to be the child
            curr.next = curr.child;
            // set the next's prev pointer to be curr
            curr.next.prev = curr;
            // assigned to next so the child is nullified
            curr.child = null; 
        } 
        // otherwise, curr.next === null, and the stack is not empty
        else if(!curr.next && stack.length!==0) {
            // go back to the latest referenced point
            curr.next = stack.pop();
            // set the prev pointer to be curr
            curr.next.prev = curr;
        }
        // otherwise, continue down the linked list
        curr = curr.next;
    }
    // return the reference to head
    return head;
};
