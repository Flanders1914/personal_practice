/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
160. Intersection of Two Linked Lists
思路：分别从两个list的开头开始，两个指针沿着list向下移动，到结尾时换到另一个list的
开头，当两个指针重合时为两个list的重合点。
证明，如果每个指针走完所有路线，均会走完lista+listb 由于lista和listb在后面有一部分是重合的，所以
两个指针会在重合点相遇
*/
var getIntersectionNode = function(headA, headB) {
    let currentA = headA;
    let currentB = headB;
    let a_finished = false, b_finished = false;

    while (currentA != currentB) {
        if (!currentA) {
            currentA = headB;
            a_finished = true;
        }
        else currentA = currentA.next;
        if (!currentB) {
            currentB = headA;
            b_finished = true;
        }
        else currentB = currentB.next;
        if (a_finished && b_finished && (!currentA || !currentB)) return null; 
    }
    return currentA;
};