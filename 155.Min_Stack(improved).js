/*
155. Min Stack
思路利用一个min_stack 存储最小元素
类比：
对于一个数组nums，生成一个min数组
min[i] 代表 nums在 0-i 中的最小num
min[i] = min[i-1] 或者 nums[i]（当nums[i]较小时）
我们从后往前删除nums的元素，在删除元素之前的min[i]不受影响
同理：
对于一个stack，min_stack存储元素i进入stack时的最小元素
元素出栈时，让min_stack出栈即可

这样的min_stack有许多重复的元素，因为如果入栈元素i不是最小元素我们要复制一个
min_stack顶端元素进栈。优化方式是如果i大于最小元素，min_stack不变，只有i是新的
最小元素或者i等于最小元素时min_stack才进入新的元素。当stack顶元素i出栈时，判断其是否与
最小元素相等，是，则min_stack最小元素出栈
*/

var MinStack = function() {
    this.stack = [];
    this.min_stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (!this.min_stack.length || this.min_stack.at(-1) >= val) {
        this.min_stack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.stack.pop();
    if (val == this.min_stack.at(-1)) this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min_stack.at(-1);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */