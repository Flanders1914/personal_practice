/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node_notes = [];
    let node = head;


    while (node != null) {

        node_notes.push(node);
        node = node.next;

    } 

    if (node_notes.length == 1) return null;
    if (node_notes.length == n) return node_notes[1];

    if (n == 1) {
        node_notes[node_notes.length -2].next = null;
        return head;
    } else {
        node_notes[node_notes.length-n-1].next = node_notes[node_notes.length-n + 1];
        return head;
    }

};