/**
390. Elimination Game
思路：递归
用模拟法即使利用双向链表也会超出空间
递归思路
第一遍从左到右相当于删除了所有奇数
剩余2 4 6 8 10...
除以二得到一个连续的序列 1 2 3 4 5...m
由于下次是从右到做所以我们用 m+1减去每个数得到 m...5 4 3 2 1
此时右到左转化为类似左到右
所以 fn = 2*(n//2+1 - fn(n//2))
 */
/*
function Node(n) {
    this.val = n;
    this.pre = null;
    this.next = null;
}
var lastRemaining = function(n) {
    if (n == 1) return 1;
    let head = new Node(-1);
    let tail = new Node(n+1);
    let previous = head;
    for (let i = 1; i <= n; i++) {
        let node = new Node(i);
        previous.next = node;
        node.pre = previous;
        previous = node;
    }
    previous.next = tail;
    tail.pre = previous;

    let count = (n);
    loop1: while (count > 1) {
        let current = head.next;
        loop2: while (current != tail) {
            current.pre.next = current.next;
            current.next.pre = current.pre;
            current = current.next;
            count--;
            if (count == 1) break loop1;
            if (current == tail || current.next == tail) break loop2;
            current = current.next;
        }
        current = tail.pre;
        loop3: while (current != head) {
            current.pre.next = current.next;
            current.next.pre = current.pre;
            current = current.pre;
            count--;
            if (count == 1) break loop1;
            if (current == head || current.next == head) break loop3;
            current = current.pre;
        }
    }
    return head.next.val;
};
*/
var lastRemaining = function(n) {
    let find = function(n) {
        if (n == 1) return 1;
        let m = n >> 1;
        return 2*(m+1-find(m));
    }
    return find(n);
};
console.log(lastRemaining(9));