/*
876. Middle of the Linked List.

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

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

var middleNode = function(head) {
    let n = 0;
    let res = head;
    
    for (let node = head; node !== null; node = node.next) {
        n++;
    }
    n = Math.trunc(n / 2);

    for (let i = 0; i < n; i++) {
        res = res.next;
    }
    
    return res;
};