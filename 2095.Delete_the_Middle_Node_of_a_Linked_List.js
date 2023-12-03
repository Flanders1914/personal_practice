/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
思路：使用fast and slow point
注意当只有一个点时返回null
 */
var deleteMiddle = function(head) {
    let slow = head;
    let fast = head;
    let pre = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        pre = slow;
        slow = slow.next;
    }
    if (slow == head) {
        // n == 1;
        return null;
    }
    pre.next = slow.next;
    return head;
};