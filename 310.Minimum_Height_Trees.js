/**
310. Minimum Height Trees
思路：BFS
拓扑排序的衍生，拓扑排序: 给定一个有向图，对所有节点排序要求对于每个边 u -> v u在v之前
如207. Course Schedule, 方法是利用BFS从最没有前置的课程开始一层一层遍历
这道题思路为从只有一条边的叶节点开始，往中心BFS，每次循环剪掉叶节点，形成新的叶节点
最后找到最中心的节点即可
 */
var findMinHeightTrees = function(n, edges) {
    if (n == 1) return [0]; // edge condition

    let hash = new Map();
    for (let edge of edges) {
        let next1;
        let next2;
        if (hash.has(edge[0])) next1 = hash.get(edge[0]);
        else {
            next1 = [];
            hash.set(edge[0], next1);
        }
        if (hash.has(edge[1])) next2 = hash.get(edge[1]);
        else {
            next2 = [];
            hash.set(edge[1], next2);
        }
        next1.push(edge[1]);
        next2.push(edge[0]);
    }
    // 利用hash表储存图，其实也可以构造节点对象会方便一点

    let current = [];
    let visited = new Set();
    for (let item of hash.entries()) {
        if (item[1].length == 1) current.push(item[0]);
    }
    //寻找所有叶节点

    while (current.length > 0) {
        if (visited.size + current.length == n) {
            return current;
        }
        // 剩下的叶节点数量加上被裁剪的节点数量 == n 说明 current 为中心（可能有2个或1个节点）
        let next = [];
        // 用储存与叶节点相邻的parents 避免重复
        let parents = new Set();
        for (let key of current) {
            visited.add(key);
            parents.add(...hash.get(key));
        }
        for (let parent of parents.keys()) {
            let all_nodes = hash.get(parent);
            let temp = [];
            for (let node of all_nodes) {
                if (!visited.has(node)) {
                    temp.push(node);
                }
            }
            // temp 储存删去叶节点的剩余边的指向节点，注意更新hash表
            hash.set(parent, temp);
            if (temp.length == 0) return [parent];
            if (temp.length == 1) next.push(parent);
        }
        current = next;
    }
};
let n = 6, edges = [[0,1],[0,2],[0,3],[3,4],[4,5]];
console.log(findMinHeightTrees(n, edges));