/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
141. Linked List Cycle
判断链表中有无循环,两种做法：
1. 使用set
2. 使用快慢指针
*/
var hasCycle = function(head) {
    const set = new Set();
    
    let current = head;

    while (current !== null) {
        if (set.has(current)) return true;
        set.add(current);
        current = current.next;
    }

    return false;
};