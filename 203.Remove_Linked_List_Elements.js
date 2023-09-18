/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
203. Remove Linked List Elements
思路：题目要求删除链表元素，反其道而行之，将不要删除的元素连在一起
注意：最后需要把previous.next 设置为null,清除残余的next
 */
var removeElements = function(head, val) {
    let root = {next : null};
    let previous = root;
    let current = head;

    while (current != null) {
        if (current.val != val) {
            previous.next = current;
            previous = current;
        }
        current = current.next;
    }
    previous.next = null;
    return root.next;
};