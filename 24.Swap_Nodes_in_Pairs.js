/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
24. Swap Nodes in Pairs
思路：用last记录上一个节点，用ISaTurn记录是否该将
last和current指向的节点反转写入ans中
注意事项：
1. 需要一个局部变量 next_node 储存current.next
因为current.next会被last所覆盖
2. 在结束循环后需要根据IsaTurn对单向链表的尾部进行处理
 */
var swapPairs = function(head) {

    let ans = {
        next : null
    };
    let ans_head = ans;
    let current = head;
    let last;
    let IsaTurn = false;

    while (current != null) {
        if (IsaTurn) { 

            let next_node = current.next;
            ans.next = current;
            ans.next.next = last;
            ans = last;
            current = next_node;

        } else {
            last = current;
            current = current.next;
        }
        IsaTurn = !IsaTurn;
    }
    
    if (IsaTurn) {
        ans.next = last;
        ans.next.next = null;
    } else {
        ans.next = null;
    }

return ans_head.next;
};