/*
155. Min Stack
这里的做法是双向链表，问题在于insert与delete操作好像都是O(n)
*/

var MinStack = function() {
    this.tail = {};
    this.head = {};
    this.tail.previous = this.head;
    this.head.next = this.tail;
    this.stack = [];
};

MinStack.prototype.insert = function(node) {
    let current = this.head.next;
    let previous = this.head;

    while (current.value < node.value && current != this.tail) {
        current = current.next;
        previous = previous.next;
    }

    node.previous = previous;
    previous.next = node;
    node.next = current;
    current.previous = node;
    return;
};

MinStack.prototype.delete = function (node) {
    let current = this.head.next;
    let previous = this.head;

    while (current != node) {
        current = current.next;
        previous = previous.next;
    }

    current = current.next;
    previous.next = current;
    current.previous = previous;
    return;
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let new_node = {value : val};
    this.stack.push(new_node);
    this.insert(new_node);
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let node = this.stack.pop();
    this.delete(node);
    return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let node = this.stack.at(-1);
    return node.value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.head.next.value;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */