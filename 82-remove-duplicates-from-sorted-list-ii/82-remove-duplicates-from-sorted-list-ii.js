/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
    IOCE: 
        Input: head - node of a list
        Output: nodes of the linked list
        Constraints: 0 < # nodes < 300
                     sorted list
        Edge Cases: if all the nodes are not unique
*/

/*
    Algorithm: 
        Since list is sorted, we can find duplicates by comparing any node's next value
        This can be done iterively 
        
        When performing the deletion, we have to keep track of the previous node and make it point to the node 
        after the duplicates 
*/
var deleteDuplicates = function(head) {
    // To make this easier, create a clone
    let curr = head, prev = null;
    
    // iterate through the list while curr and curr.next are not null
    while(curr && curr.next){
        // if a match is found
        if(curr.val === curr.next.val){
            // continue to search for other matching values 
            while((curr && curr.next) && curr.val === curr.next.val){
                curr = curr.next;
            }
            // after the previous loop has reached the final duplicate (0,2,3,3,3,4,5) it would have stopped at the last 3 in the list
            // move to the next node that is not in that set of duplicates which would be 4 in this case 
            curr = curr.next;
            // if prev has not yet been set as a unique value, this would mean the list started out not unique
            if(!prev) {
                // set the head to curr and remove everything behind it 
                head = curr;
            } else {
                // otherwise, set prev's next pointer to curr to connect the prev to the current node
                prev.next = curr;
            }
            // unique values are found so move down the list
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
};