/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
429. N-ary Tree Level Order Traversal
思路：BFS
注意这道题隐藏条件是 children是数组或可迭代对象
 */
var levelOrder = function(root) {
    let res = [];
    if (!root) return res;
    let current = [root];
    while (current.length) {
        let next = [];
        let layer = [];
        for (let node of current) {
            layer.push(node.val);
            for (let child of node.children) {
                next.push(child);
            }
        }
        res.push(layer);
        current = next;
    }
    return res;
};