/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
237. Delete Node in a Linked List
这道题的意思是在不知道前一个节点的条件下删除list中给定的node
方法是将所有之后的node的属性向前移动，然后删除最后一个node
 */
var deleteNode = function(node) {
    let current = node;
    let previous = node;
    while (current.next != null) {
        current.val = current.next.val;
        previous = current;
        current = current.next;
    }
    previous.next = null;
};