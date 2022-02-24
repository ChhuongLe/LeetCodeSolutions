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
        Input: head - node of a linked list
        Output: head - node of a linked list
        Constraints: 
            Numbers of nodes can range from 0 to 5*10^4
        Edge Cases: 
            Empty head
*/
var sortList = function(head) {
    // base case
    if(!head || !head.next) {
        return head;
    }
    // split the list into two halves
    // let the left list start at the head and the right start in the middle of the list
    let left = head, right = getMid(head);
    // want middle to be right.next
    let tmp = right.next;
    right.next = null;
    right = tmp;
    
    // store the sorted lists
    left = sortList(left);
    right = sortList(right);
    // return the merged sorted list
    return merge(left,right);
};

// gets the middle of the list
const getMid = (node) => {
    let slow = node, fast = node.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// performs the merging and sorting here
const merge = (list1, list2) => {
    let dummy = new ListNode();
    let tail = dummy;
    while(list1 && list2) {
        if(list1.val < list2.val){
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    if(list1) {
        tail.next = list1;
    } 
    if(list2){
        tail.next = list2;
    }
    return dummy.next;
}