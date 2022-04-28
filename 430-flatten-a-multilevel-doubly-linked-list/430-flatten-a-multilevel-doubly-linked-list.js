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
var flatten = function(head) {
    if(!head) {
        return null;
    }
    
    let dummy = new Node(0, null, head, 0);
    let stack = [head];
    let curr = dummy;
    let prev = null;
    
    while(stack.length !== 0) {
        curr = stack.pop();
        
        if(prev) {
            curr.prev = prev;
            prev.next = curr;
        }
        
        if(curr.next !== null) {
            stack.push(curr.next);
        }
        if(curr.child !== null) {
            stack.push(curr.child);
            curr.child = null;
        }
        prev = curr;
    }
    return dummy.next;
};