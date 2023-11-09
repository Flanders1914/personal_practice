/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
382. Linked List Random Node
思路：转换为数组
 */
var Solution = function(head) {
    this.memo = [];
    let current = head;
    while (current) {
        this.memo.push(current.val);
        current = current.next;
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let index = Math.floor(Math.random()*this.memo.length);
    return this.memo[index];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */