/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
133. Clone Graph
复制无向图
思路：先利用map建立node和复制的node之间的对应关系
再遍历map将neighbors复制
 */
var cloneGraph = function(node) {
    map = new Map();
    if (node == null) return null;
    let current = [node];

    while (current.length) {
        let next = [];
        for (let node of current) {
            let node_copy = new Node(node.val);
           map.set(node, node_copy); 
        }
        for (let node of current) {
            for (let neighbor of node.neighbors) {
                if (!map.has(neighbor)) {
                    next.push(neighbor);
                }
            }
        }
        current = next;
    }

    for (let item of map.entries()) {
        for (let neighbor of item[0].neighbors) {
            item[1].neighbors.push(map.get(neighbor));
        }
    }

    return map.get(node);
};