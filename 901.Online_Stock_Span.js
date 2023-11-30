/*
901. Online Stock Span
思路：单调stack
利用一个单调递减的stack
遇到新的价格，出栈到栈顶元素的价格 > price 位置，利用count统计出栈元素价格持续时间的总和
该价格持续时间为count，然后将该价格和count压入栈
原理：当一个价格大于等于前面若干价格时，前面若干价格的持续时间可以合并到该价格上
*/
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    if (this.stack.length == 0) {
        this.stack.push([price, 1]);
        return 1;
    } else {
        let count = 1;
        while (this.stack.length && this.stack.at(-1)[0] <= price) {
            count += this.stack.pop()[1];
        }
        this.stack.push([price, count]);
        return count;
    }
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */