/*
21. Merge Two Sorted Lists.

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
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

var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode();
    
    const mergeTwoListsRec = (list1, list2) => {
        if (list1 === null & list2 === null) return;
        
        if (list1 === null) {
            add(list3, new ListNode(list2.val, null));
            mergeTwoListsRec(list1, list2.next);
        } else if (list2 === null) {
            add(list3, new ListNode(list1.val, null));
            mergeTwoListsRec(list1.next, list2);
        } else if (list1.val <= list2.val) {
            add(list3, new ListNode(list1.val, null));
            mergeTwoListsRec(list1.next, list2);
        } else if (list2.val <= list1.val) {
            add(list3, new ListNode(list2.val, null));
            mergeTwoListsRec(list1, list2.next);
        }
    }
    
    mergeTwoListsRec(list1, list2);
    return list3.next;  
};