/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
142. Linked List Cycle II
两种做法：
1. set
2. 快慢指针，fast速度是slow两倍
假设fast与slow相遇在k点，此时设置k点和head为起点，两者速度均为前进一步，相遇点为起点

注意：在k点 fast前进了2n步，slow前进了n步，循环长n步
设 n = a + b (a为循环外的步数)
当从head开始的指针走了a步时，slow走了n+a步
即回到了循环起点，所以必然相遇于循环起点
*/
var detectCycle = function(head) {
    const set = new WeakSet();
    let current = head;

    while (current !== null) {
        if (set.has(current)) return current;
        set.add(current);
        current = current.next;
    }
    return null;
};