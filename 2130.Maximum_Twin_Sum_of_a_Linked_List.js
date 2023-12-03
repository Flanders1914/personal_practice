/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
2130. Maximum Twin Sum of a Linked List
思路: 利用stack
 */
var pairSum = function(head) {
    let stack = [];
    let current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }
    let res = 0;
    current = head;
    while (stack.at(-1).next != current) {
        res = Math.max(current.val + stack.pop().val, res);
        current = current.next;
    }
    return res;
};