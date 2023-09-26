/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
234. Palindrome Linked List
最优做法：快慢指针
利用快慢指针定位到list的中点，并在慢指针走的每一步将当前元素的next指向前一个元素
最后将两个指针从中点出发判断是否为回文数
时间复杂度 O(n) 空间复杂度O(1)
 */
var isPalindrome = function(head) {
    let fast = head;
    let next = head.next;
    let slow = head;
    let is_odd = false; // 需要判断list长度是奇数还是偶数，对应不同的处理方式
    if (head == null || head.next == null) return true;

    while (true) {
        if (fast.next == null) {
            is_odd = true;
            break;
        }
        else if (fast.next.next == null) {
            is_odd = false;
            break;
        }
        fast = fast.next.next;
        let previous = slow;
        slow = next;
        next = next.next;
        slow.next = previous;
    }

    let left, right;
    if (is_odd) {
        left = slow.next;
        right = next;
    } else {
        left = slow;
        right = next;
    }

    while (right != null) {
        if (right.val != left.val) return false;
        right = right.next;
        left = left.next;
    }
    return true;
};

console.log(isPalindrome({val : 1, next : {val : 2, next : null}}));