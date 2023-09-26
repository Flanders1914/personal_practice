
/** 
232. Implement Queue using Stacks
用两个stack模拟queue
一个stack存储数据，另一个用于出栈数据的临时储存
*/
var MyQueue = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let memo = [];
    while (this.stack.length) {
        memo.push(this.stack.pop());
    }
    let ans = memo.pop();
    while (memo.length) {
        this.stack.push(memo.pop());
    }
    return ans;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let memo = [];
    while (this.stack.length) {
        memo.push(this.stack.pop());
    }
    let ans = memo.pop();
    memo.push(ans);
    while (memo.length) {
        this.stack.push(memo.pop());
    }
    return ans;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.stack.length == 0) return true;
    else return false;
};
