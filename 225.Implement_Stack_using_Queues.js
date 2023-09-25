/** 
225. Implement Stack using Queues
用两个queue模拟stack
queue只能支持FIFO，和size
为方便起见用 array.unshift() array.pop()模拟FIFO
牺牲了时间复杂度
思路：一个queue储存数据，另一个在需要返回最后进入的值时存储出queue的数据
 */

var MyStack = function() {
    this._arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this._arr.unshift(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let memo = [];
    while (this._arr.length > 1) {
        memo.unshift(this._arr.pop());
    }
    let ans = this._arr.pop();
    this._arr = memo;
    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let memo = [];
    while (this._arr.length > 1) {
        memo.unshift(this._arr.pop());
    }
    let ans = this._arr.pop();
    memo.unshift(ans);
    this._arr = memo;
    return ans;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if (!this._arr.length) return true;
    else return false;
};

