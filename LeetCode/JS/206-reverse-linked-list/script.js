/*
206. Reverse Linked List.

Given the head of a singly linked list, reverse the list, and return the reversed list.
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

function add(list1, list2) {
    if (list1 === null) {
        list1 = list2;
    } else {
        let node = list1;
        while (node.next !== null) node = node.next;
        node.next = list2;
    }
}

var reverseList = function(head) {
    let res = new ListNode();
    let arr = [];
    
    for (let n = head; n !== null; n = n.next) {
        arr.push(n);
    }
    for (let i = arr.length - 1; i >= 0 ; i--) {
        add(res, new ListNode(arr[i].val, null));
    }
    
    return res.next;
};