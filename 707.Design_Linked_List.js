/*
707. Design Linked List
设计链表
注意很多细节问题
如size的更新， tail的更新，以及题目给出的详细规则
*/
var MyLinkedList = function() {
    this.link_head = {next : null};
    this.link_tail = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index > this.size-1) return -1;
    let current = this.link_head.next;
    let i = 0;
    while (i != index) {
        i++;
        current = current.next;
    }
    return current.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let temp = this.link_head.next;
    let current = {val : val};
    current.next = temp;
    this.link_head.next = current;
    if (this.link_tail === null) this.link_tail = current;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let current = {val : val, next : null};
    if (this.link_tail == null) {
        this.addAtHead(val);
        return;
    }
    this.link_tail.next = current;
    this.link_tail = current;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index == 0) {
        this.addAtHead(val);
        return;
    }
    if (index == this.size) {
        this.addAtTail(val);
        return;
    }
    if (index < 0 || index > this.size) return;
    let current = this.link_head.next;
    let i = 0;
    while (i != index -1) {
        current = current.next;
        i++;
    }

    let temp = current.next;
    let node = {val : val};
    current.next = node;
    node.next = temp;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index > this.size-1) return;
    if (index == 0) {
        this.link_head.next = this.link_head.next.next;
        this.size--;
        return;
    }

    let i = 0;
    let current = this.link_head.next;
    while (i != index-1) {
        current = current.next;
        i++;
    }
    if (current.next == this.link_tail) {
        this.link_tail = current;
        current.next = null;
        this.size--;
        return;
    }
    current.next = current.next.next;
    this.size--;
    return;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
let obj = new MyLinkedList();
obj.addAtHead(7);
obj.addAtHead(2);
obj.addAtHead(1);
obj.addAtIndex(3, 0);
obj.deleteAtIndex(2);
obj.addAtHead(6);
obj.addAtTail(4);
obj.get(4);