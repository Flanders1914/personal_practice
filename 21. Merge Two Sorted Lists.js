/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let result = {
        next : null
    };

    let head = result;
    let current1 = list1;
    let current2 = list2;

    while ( current1 !== null && current2 !== null) {

        if (current1.val < current2.val) {

            result.next = {
                val : current1.val,
                next : null
            };
            current1 = current1.next;

        }
        else {
            result.next = {
                val : current2.val,
                next : null
            };
            current2 = current2.next;
        }
        result = result.next;

    }

    while (current1 != null) {
        result.next = {
            val : current1.val,
            next : null
        };
        current1 = current1.next;
        result = result.next;
    }

    while (current2 != null) {
        result.next = {
            val : current2.val,
            next : null
        };
        current2 = current2.next;
        result = result.next;
    }
    

    return head.next;
};