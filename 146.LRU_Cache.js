/*
146. LRU Cache
构造一个LRU cache（最近最少使用算法）
要求查找和设置值的时间复杂度为O(1)
思路：使用双向链表的数据结构，并利用一个map映射实现以O(1)从key
查找node
双向链表使得将node从尾部去除或者将node移动至头部的时间复杂度均为O(1)
*/

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = {};
    this.tail = {};
    this.head.next = this.tail;
    this.tail.previous = this.head;
};

LRUCache.prototype.move_to_front = function(target) {
    target.previous.next = target.next;
    target.next.previous = target.previous;

    target.previous = this.head;
    target.next = this.head.next;
    this.head.next = target;
    target.next.previous = target;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;
    let target = this.map.get(key);
    this.move_to_front(target);
    return target.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let target = this.map.get(key);
        target.val = value;
        this.move_to_front(target);
        return;
    }

    // create and insert new node
    if (this.map.size < this.capacity) {
        let new_node = {key : key, val : value};
        this.map.set(key, new_node);
        this.head.next.previous = new_node;
        new_node.next = this.head.next;
        this.head.next = new_node;
        new_node.previous = this.head;
        return;
    }

    //delete the last node
    this.map.delete(this.tail.previous.key);
    this.tail.previous.previous.next = this.tail;
    this.tail.previous = this.tail.previous.previous;

    // insert new node
    let new_node = {key : key, val : value};
    this.map.set(key, new_node);
    this.head.next.previous = new_node;
    new_node.next = this.head.next;
    this.head.next = new_node;
    new_node.previous = this.head;
    return;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */