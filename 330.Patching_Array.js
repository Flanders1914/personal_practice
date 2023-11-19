/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
430. Flatten a Multilevel Doubly Linked List
思路：递归
注意一个隐藏条件，处理完child后要将child清空为null
其次注意temp == current.next == null 的 情况下不要设置temp.pre 为 nextTail
 */
var flatten = function(head) {
    let current = head;
    while (current) {
        if (current.child) {
            let nextHead = flatten(current.child);
            current.child = null;
            let temp = current.next;
            current.next = nextHead;
            nextHead.prev = current;
            let nextTail = nextHead;
            while (nextTail.next) nextTail = nextTail.next;
            nextTail.next = temp;
            if (temp) temp.prev = nextTail;
            current = temp;
            continue;
        }
        current = current.next;
    }
    return head;
};