/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
83. Remove Duplicates from Sorted List
思路：和82类似，是82的简化版
1. previous_val 记录上一个节点的值
2. 如果current.val != previous_val previous_val 记录到ans中
3. 如果current.val == previous_val current 往后移动

注意：
1. 对空链表和单元素链表特殊处理
2. 注意把结尾的元素添加到ans中
*/
var deleteDuplicates = function(head) {
    // 输入的是空链表,当链表只有一个元素直接输出
    if (head == null) return null;
    if (head.next == null) return head;

    let current = head.next, previous_val = head.val;
    let ans = {
        next : null
    }; 
    let ans_head = ans;

    while (current !== null) {

        if (current.val !== previous_val) {
            ans.next = {
                val : previous_val,
                next : null
            };
            ans = ans.next;

            previous_val = current.val;
            current = current.next;
        } else {
            current = current.next;
        }
    }
    ans.next = {
        val : previous_val,
        next : null
    }

    return ans_head.next;
};