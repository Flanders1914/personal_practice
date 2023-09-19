/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
206. Reverse Linked List
反转链表，利用数组
 */
var reverseList = function(head) {
    if (head == null) return null;
    let stack = [];
    let current = head;
    while (current != null) {
        stack.push(current);
        current = current.next;
    }
    for (let i = stack.length-2; i >= 0; i--) {
        stack[i+1].next = stack[i];
    }
    stack[0].next = null;
    return stack[stack.length-1];
};