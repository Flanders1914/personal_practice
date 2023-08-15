/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
思路：
1. current当前的元素 previous上一层元素 next下一层元素 count当前的层号
2. conjunction_left记录需要改变的链表开始前一个的元素
3. 利用 ans_begin 解决了left为head的情况
4. sub_head 记录需要改变的子链表的头，她将成为子链表倒转后的的尾部
5. 倒转过程in-place 即在迭代的过程中让current.next = previous 并对头尾做处理
注意：最后一子链表个元素需要没有在迭代中倒转
*/
var reverseBetween = function(head, left, right) {
    let current = head;
    let ans_begin = {next : head};
    let count = 1, previous = ans_begin;
    let conjunction_left;

    if (left == right) return head;

    while (count !== left) {
        previous = current;
        current = current.next;
        count++;
    }
    
    conjunction_left = previous;
    let sub_head = current;
    let next = current.next;
    current.next = null;

    while (count !== right) {
        previous = current;
        current = next;
        next = current.next;
        current.next = previous;
        count++;
    }

    if (next == null) {
        current.next = previous;
        conjunction_left.next = current;
        return ans_begin.next;
    } else {
        current.next = previous;
        sub_head.next = next;
        conjunction_left.next = current;
        return ans_begin.next;
    }
};