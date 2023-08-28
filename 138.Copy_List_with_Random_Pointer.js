/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/*
深度复制一个带有random的list
主要思路是利用map建立原list和复制的list的映射
*/
var copyRandomList = function(head) {
    if (head == null) return null;

    let map = new Map();
    let copy_head = new Node(head.val, null, null);
    let previous = copy_head;
    map.set(head, copy_head);
    let current = head.next;

    while (current != null) {
        let new_node = new Node(current.val, null, null);
        previous.next = new_node;
        map.set(current, new_node);
        previous = new_node;
        current = current.next;
    }

    current = head;
    copy_current = copy_head;
    while (current != null) {
        copy_current.random = map.get(current.random);
        current = current.next;
        copy_current = copy_current.next;
    }
    return copy_head;
};