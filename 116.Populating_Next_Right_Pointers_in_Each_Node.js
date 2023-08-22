/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 116. Populating Next Right Pointers in Each Node
 思路：水平遍历
 */
var connect = function(root) {
    if (root == null) return null;
    let cache = [root];
    
    while (cache.length) {
        let next = [];
        for (let i = 0; i <= cache.length -2; i++) {
            cache[i].next = cache[i + 1];
            if (cache[0].left !== null) {
                next.push(cache[i].left);
                next.push(cache[i].right);
            }
        }
        cache[cache.length -1].next = null;
        if (cache[0].left !== null) {
            next.push(cache[cache.length -1].left);
            next.push(cache[cache.length -1].right);
        }
        cache = next;
    }

    return root;
}; 