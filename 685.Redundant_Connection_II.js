/**
685. Redundant Connection II
思路：
在684的基础上进一步
我们假设某一个边是多余的边
所以剩余的边就能把所有节点够构成树
利用 DSU union的性质判断有没有产生环
利用 is_pointed set 判断是否有节点被两个不同的父节点指向
利用 DSU.rank 判断是否所有的节点都包括在树中

迭代所有边，设置所有边为candid，判断去除当前边是否没有触发以上的条件
若都没有则构成了树，表示当前边可以删去

优化：
若存在两个边指向同一个点，我们只需要判断具有两个parent的节点所在的边即可
 */
class DSU {
    constructor(n) {
        this.parent = new Array(n).fill(0);
        for (let i = 0; i <= this.parent.length-1; i++) {
            this.parent[i] = i;
        }
        this.rank = new Array(n).fill(1);
    }

    find(x) {
        if (x == this.parent[x]) return x;
        else {
            return this.parent[x] = this.find(this.parent[x]);
        }
    }

    union(x, y) {
        let root1 = this.find(x);
        let root2 = this.find(y);
        if (root1 == root2) return false;
        if (this.rank[root1] >= this.rank[root2]) {
            this.parent[root2] = root1;
            this.rank[root1] += this.rank[root2];
        } else {
            this.parent[root1] = root2;
            this.rank[root2] += this.rank[root1];
        }
        return true;
    }
}

var findRedundantDirectedConnection = function(edges) {
    const map = new Map();
    let points_from = new Map();
    let candids = [];

    for (let i = 0; i <= edges.length-1; i++) {
        [x, y] = edges[i];
        if (map.has(x)) map.get(x).push(y);
        else map.set(x, [y]);
        if (candids.length == 0) {
            if (points_from.has(y)) {
                candids.push(i);
                candids.push(points_from.get(y));
            } else points_from.set(y, i);
        }
    }
    if (candids.length == 0) {
        for (let i = edges.length-1; i >= 0; i--) {
            candids.push(i);
        }
    }
    outer: for (let candid of candids) {
        let dsu = new DSU(edges.length+1);
        let is_pointed = new Set();
        for (let i = 0; i <= edges.length-1; i++) {
            if (i == candid) continue;
            if (is_pointed.has(edges[i][1])) continue outer;
            else is_pointed.add(edges[i][1])
            if (!dsu.union(edges[i][0], edges[i][1])) continue outer;
        }
        if (dsu.rank[dsu.find(edges[candid][0])] == edges.length) return edges[candid];
    }
};
console.log(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,1],[1,5]]));