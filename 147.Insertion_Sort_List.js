/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
147. Insertion Sort List
用单向链表实现插入排序
思路：将链表断成两部分：完成排序的部分和未排序的部分
这样无论是外层迭代还是里层迭代结束条件都是 current == null
*/
var insertionSortList = function(head) {
    if (head == null) return null;
    
    let node = head.next;
    let list_head = {next : head};
    head.next = null;

    while (node) {
        let current = list_head.next;
        let previous = list_head;
        while (current) {
            if (current.val > node.val) {
                break;
            }
            current = current.next;
            previous = previous.next;
        }
        let next = node.next;
        node.next = current;
        previous.next = node;
        node = next;
    }

    return list_head.next;
};