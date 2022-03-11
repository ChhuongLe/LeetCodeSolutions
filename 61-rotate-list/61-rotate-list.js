/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/*
    IOCE:
        Input: head - node of list
               k - number of  rotations
        Output: list 
        Constraints: # of heads can be 0, k can also be 0 
        Edge Cases: none to consider
*/

/*
    Algo: 
        Count the number of nodes in list
        Number of rotations can be found using k = k % count
        Move ptr k positions ahead
        Once ptr is k positions ahead, this will let us know k positions from the end
        Break the list after the prev node
*/
var rotateRight = function(head, k) {
    if(!head){
        return head;
    }
    let count = 0, ptr = head;
    
    // count number of nodes
    while(ptr){
        count++;
        ptr = ptr.next;
    }
    
    k = k % count;
    let prev = head;
    ptr = head;
    
    while(k--){
        ptr = ptr.next;
    }
    while(ptr.next){
        prev = prev.next;
        ptr = ptr.next;
    }
    ptr.next = head;
    head = prev.next;
    prev.next = null;
    return head;
    
};