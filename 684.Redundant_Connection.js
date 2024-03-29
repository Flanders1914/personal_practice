/**
684. Redundant Connection
重要数据结构并查集 Disjoint-set data structure(DSU)
DSU用于处理一系列不交集数据集合
可以：
1.创建一个集合
2.查找某个元素在哪个集合中
3.判断两个元素是否属于同一个集合
4.将两个集合合并

DSU的基本思路是将同一集合的元素存储为树状数据结构，每个元素指向根节点
根节点指向自身，查找元素所属的集合则从该元素开始向上追溯到根节点
合并集合则将一个集合的根节点指向另一个集合的根节点

利用数组模拟DSU如下所示：
1. constructor中存储两个数组，parent即指向的根节点坐标，rank存储当前坐标对应的
根节点的秩，用于在合并中优化DSU,为减少查询时间，我们希望树的深度越浅越好，因此我们一般将
较小秩的集合并入较大秩的集合，这里的秩为集合中元素的个数
2. 查找向上回溯到根节点，并将更节点赋值给路径上所有节点以此来降低深度
3. 合并将一个集合的根节点指向另一个集合，并将两个秩相加成新秩即可

该题思路：
初始情况下所有节点都为一个DSU 集合，所有节点都不互相连通
遍历每个边将当前的边的两个节点所在的集合进行合并，同一个集合里面的节点都能连通，如果
两个点属于相同的集合表示两个点本身就能连通，即当前边是多余的边
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
var findRedundantConnection = function(edges) {
    let dsu = new DSU(edges.length);
    for (let [a, b] of edges) {
        if (!dsu.union(a, b)) return [a, b];
    }
};
let  edges = [[1,2],[2,3],[3,4],[1,4],[1,5]];
console.log(findRedundantConnection(edges));