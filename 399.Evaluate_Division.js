/**
思路：
将条件转换为有向图，然后使用BFS
注意：
需要先判断query中的元素是否给出
还要先判断query中的target 是否 等于 start
 */
function Node(val) {
    this.val = val;
    this.next = [];
    this.edges = [];
}
var calcEquation = function(equations, values, queries) {
    let hash = new Map();
    for (let i = 0; i <= equations.length-1; i++) {
        let [first, second] = equations[i];
        if (!hash.has(first)) hash.set(first, new Node(first));
        if (!hash.has(second)) hash.set(second, new Node(second));
        let node1 = hash.get(first);
        let node2 = hash.get(second);
        node1.next.push(node2);
        node1.edges.push(values[i]);
        node2.next.push(node1);
        node2.edges.push(1/values[i]);
    }

    let res = [];
    for (let query of queries) {
        let [start, target] = query;
        if (!hash.has(start) || !hash.has(target)) {
            res.push(-1);
            continue;
        }
        if (start == target) {
            res.push(1);
            continue;
        }
        // BFS
        let current = [[hash.get(start), 1]];
        let set = new Set();
        let is_find = false;
        outer: while (current.length) {
            let next = [];
            for (let [node, pre] of current) {
                set.add(node);
                for (let i = 0; i <= node.next.length-1; i++) {
                    if (!set.has(node.next[i])) {
                        if (node.next[i].val == target) {
                            res.push(pre*node.edges[i]);
                            is_find = true;
                            break outer;
                        }
                        else {
                            next.push([node.next[i], pre * node.edges[i]]);
                        }
                    }
                }
            }
            current = next;
        }
        if (!is_find) res.push(-1);
    }
    return res;
};
let equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
console.log(calcEquation(equations, values, queries));
