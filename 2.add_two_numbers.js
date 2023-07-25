/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let answerbegin = {};
    let current = answerbegin;
    let k = 0;
    let nodeforzero = {
        val : 0,
        next : null        
    };
    let last;

    do {
        
        current.val = (l1.val || 0) + (l2.val || 0) + k;
        current.next = {};
        k = 0;

        if (current.val >= 10) {
            current.val = current.val % 10;
            k = 1;
        }

        last = current;
        current = current.next;

        l1 = (l1.next === null) ? nodeforzero : l1.next;
        l2 = (l2.next === null) ? nodeforzero : l2.next;

    } while (l1 !== nodeforzero || l2 !== nodeforzero);

    if (k === 1) {
        current.next = null;
        current.val = 1;
    } else {
        last.next = null;
    }

    return answerbegin;
};