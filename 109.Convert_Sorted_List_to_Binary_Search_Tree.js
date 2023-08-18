/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
109. Convert Sorted List to Binary Search Tree
将链表转换为 height-balanced BST
如果将链表转换为数组，这道题很简单 时间复杂度只有O(n);
但最好不要这么做
下面利用了快慢指针定位根节点，并在函数中传递了第二个参数end
实现了in-place将链表转化为BST, BST同时保留了链表的性质
时间复杂度 O(nlogn) 空间复杂度 O(1)
*/
var sortedListToBST = function(head, end = null) {
    if (head == end) return null;
    let current_slow = head;
    let current_fast = head;

    while (current_fast.next != end && current_fast.next.next != end) {
        current_fast = current_fast.next.next;
        current_slow = current_slow.next;
    }

    let node = current_slow;
    node.right = sortedListToBST(current_slow.next, end);
    node.left = sortedListToBST(head, current_slow);
    return node;
};