/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
61. Rotate List
简单的单向链表旋转
注意输入数据可能为null，以及坐标的设置即可
*/
var rotateRight = function(head, k) {
    let depth = 1;
    let current = head;
    if (head == null) return head;
    
    while (current.next != null) {
        current = current.next;
        depth++;
    }

    let last = current;
    k = k % depth;
    if (k == 0) return head;

    let new_head, count = 1;
    current = head;

    while (count < depth - k) {
        current = current.next;
        count++;
    }

    new_head = current.next;
    current.next = null;
    last.next = head;

    return new_head;
};
