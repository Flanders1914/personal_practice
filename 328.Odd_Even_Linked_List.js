/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
328. Odd Even Linked List
水题，拆分为两个list即可
 */
var oddEvenList = function(head) {
    if (!head || !head.next || !head.next.next) return head;
    let odd = {}, even = {};
    let head1 = odd, head2 = even;
    let count = 1, current = head;
    while (current) {
        if (count % 2 == 1) {
            odd.next = current;
            odd = current;
        } else {
            even.next = current;
            even = current;
        }
        current = current.next;
        count++;
    }
    odd.next = head2.next;
    even.next = null;
    return head1.next;
};