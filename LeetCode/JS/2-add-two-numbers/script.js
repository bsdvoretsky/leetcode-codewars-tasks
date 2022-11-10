/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *  this.val = (val===undefined ? 0 : val)
 *  this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let res = new ListNode();
  let tmp;
  let shift = 0;

  while (l1 !== null && l2 !== null) {
    tmp = res;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = new ListNode((l1.val + l2.val + shift) % 10, null);

    shift = Math.floor((l1.val + l2.val + shift) / 10);

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1 !== null) {
    tmp = res;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = new ListNode((l1.val + shift) % 10, null);

    shift = Math.floor((l1.val + shift) / 10);

    l1 = l1.next;
  }

  while (l2 !== null) {
    tmp = res;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = new ListNode((l2.val + shift) % 10, null);

    shift = Math.floor((l2.val + shift) / 10);

    l2 = l2.next;
  }

  if (shift != 0) {
    tmp = res;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = new ListNode(shift, null);
  }

  return res.next;
};