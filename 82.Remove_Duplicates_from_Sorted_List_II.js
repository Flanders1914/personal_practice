/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
82. Remove Duplicates from Sorted List II
思路：
1. previous_val 记录上一个节点的值
2. 如果current.val != previous_val previous_val 记录到ans中
3. 如果current.val == previous_val current 一直下移到一个等式不成立的节点
并令其val为previous_val，current = current.next;

注意：
1. 对空链表和单元素链表特殊处理
2. 注意在链表结尾处做特殊处理
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
            if (current == null) {
                ans.next = {
                    val : previous_val,
                    next : null
                }
            }

        } else {
            while (current !== null && current.val == previous_val) current = current.next;
            if (current == null) break;
            else {
                if (current.next == null) {
                    ans.next = {
                        val : current.val,
                        next : null
                    }
                    return ans_head.next;
                } else {
                    previous_val = current.val;
                    current = current.next;
                }
            }
        }
    }

    return ans_head.next;
};