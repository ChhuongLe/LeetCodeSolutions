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
var flatten = function(head) {
    // if head does not have a value
    if(!head){
        // return null
        return null;
    }
    // make a new doubly linked list
    let dummyHead = new Node(0, null, head, 0);
    
    // use a stack for ease of reference
    let stack = [head];
    // set curr to the dummyHead 
    let curr = dummyHead;
    // initialize a prev pointer 
    let prev = null;
    
    // while the stack is not empty, iterate through
    while(stack.length != 0){
        // find the first value of the stack and assign it to the curr pointer
        curr = stack.pop();
        
        // check if prev was assigned a value
        if(prev){
            // set curr's prev to prev
            curr.prev = prev;
            // set prev's next to curr
            prev.next = curr;
        }
        // if next exsists
        if(curr.next !== null){
            // push it to the stack
            stack.push(curr.next);
        }
        // if a child exsists
        if(curr.child !== null){
            // push it to the stack
            stack.push(curr.child);
            // remove the child reference 
            curr.child = null;
        }
        // assign prev curr to "remember" it
        prev = curr;
    }
    // return the list
    return dummyHead.next;
};