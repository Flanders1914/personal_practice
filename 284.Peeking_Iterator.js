/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
284. Peeking Iterator
思路：在peek后 this.peeked存储下一个值
在调用next时，如果this.peeked不是null 那么iterator不动返回this.peeked 值然后将peeked初始化为null
 */
var PeekingIterator = function(iterator) {
    this.iterator = iterator;
    this.peeked = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if (this.peeked === null) {
        this.peeked = this.iterator.next();
        return this.peeked;
    } else return this.peeked;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if (this.peeked === null) {
        return this.iterator.next();
    } else {
        let temp = this.peeked;
        this.peeked = null;
        return temp;
    }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    if (this.peeked === null) {
        if (this.iterator.hasNext()) return true;
        else return false;
    } else return true;
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */