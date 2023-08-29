/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
143. Reorder List
利用一个数组储存list节点的引用
*/
var reorderList = function(head) {
    let memo = [];
    let current = head;
    while (current !== null) {
        memo.push(current);
        current = current.next;
    }

    let left = 0, right = memo.length -1;
    let previous = {next:null};

    while (left <= right) { //注意 left == right 需要处理
        previous.next = memo[left];
        memo[left].next = memo[right];
        memo[right].next = null;
        previous = memo[right];
        left++;
        right--;
    }
    
    return memo[0];
};