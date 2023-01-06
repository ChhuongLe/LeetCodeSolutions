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

/*
    Algorithm: 
        1. initialize a new doubly linked list to return, a stack to populate, and a prev pointer to remember the predecesor of the current node
        2. populate the stack with the first value in the list
        3. traverse the list until the stack is empty
            3a. at each step of the traversal, pop the first node and label it curr from the stack
            3b. establish connections between prev and curr
            3c. search for curr.next and children if applicable
                3ca. if curr.next does exsist, push node into stack for the next iteration
                3cb. if curr.child exists then push node into stack and add to the list
                    3cba. clean this pointer as it should not be present in the flattend list (set it to null)
        4. return the newly flattened doubly linked list
    
*/
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

/* stack method: store children if exsist
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
