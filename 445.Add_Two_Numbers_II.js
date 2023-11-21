/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
445. Add Two Numbers II
思路：利用栈
注意最后可能出现的余数
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = [];
    let num2 = [];
    let res = [];
    let current = l1;
    while (current) {
        num1.push(current.val);
        current = current.next;
    }
    current = l2;
    while (current) {
        num2.push(current.val);
        current = current.next;
    }
    let remainder = 0;
    while (num1.length && num2.length) {
        let digit = num1.pop() + num2.pop() + remainder;
        if (digit > 9) remainder = 1;
        else remainder = 0;
        digit %= 10;       
        let node = new ListNode(digit);
        res.push(node);
    }
    while (num1.length) {
        let digit = num1.pop() + remainder;
        if (digit > 9) remainder = 1;
        else remainder = 0;
        digit %= 10;       
        let node = new ListNode(digit);
        res.push(node);
    }
    while (num2.length) {
        let digit = num2.pop() + remainder;
        if (digit > 9) remainder = 1;
        else remainder = 0;
        digit %= 10;       
        let node = new ListNode(digit);
        res.push(node);
    }
    if (remainder == 1) res.push(new ListNode(1));
    for (let i = res.length-1; i > 0; i--) {
        res[i].next = res[i-1];
    }
    return res.at(-1);
};