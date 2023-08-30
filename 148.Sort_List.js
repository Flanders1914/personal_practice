/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
148. Sort List
思路：快速排序
注意链表可能为空
另外虽然浪费了一点时间，最好还是把pivot设置为mid
因为测试数据容易出现针对pivot == head的情况
*/
var sortList = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    // find pivot
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let pivot = slow;

    let left = {next : null};
    let right = {next : null};
    let mid = {next : null};

    // partition
    let current = head, left_end = left, right_end = right, mid_end = mid;
    while(current) {
        if (current.val == pivot.val) {
            mid_end.next = current;
            mid_end = mid_end.next;
        }
        else if (current.val < pivot.val) {
            left_end.next = current;
            left_end = left_end.next;
        } else {
            right_end.next = current;
            right_end = right_end.next;
        }
        current = current.next;
    }
    left_end.next = null;
    mid_end.next = null;
    right_end.next = null;

    left = sortList(left.next);
    right = sortList(right.next);
    mid = mid.next;

    // merge
    let begin = left;
    current = left;
    if (current) {
        while (current.next) {
            current = current.next;
        }
        current.next = mid;
    } else {
        current = mid;
        begin = mid;
    }
    while(current.next) {
        current = current.next;
    }
    current.next = right;
    return begin;
}