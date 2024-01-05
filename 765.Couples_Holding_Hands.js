/**
 * @param {number[]} row
 * @return {number}
 */
class DSU {
    constructor (n) {
        this.parent = new Array(n).fill(0);
        for (let i = 0; i <= this.parent.length-1; i++) {
            this.parent[i] = i;
        }
        this.rank = new Array(n).fill(1);
    }

    find(x) {
        if (this.parent[x] == x) return x;
        else return this.parent[x] = this.find(this.parent[x]);
    }

    union(x, y) {
        let root1 = this.find(x);
        let root2 = this.find(y);
        if (root1 == root2) {
            return false;
        }
        if (this.rank[root1] > this.rank[root2]) {
            this.parent[root2] = root1;
            this.rank[root1] += this.rank[root2];
        } else {
            this.parent[root1] = root2;
            this.rank[root2] += this.rank[root1];
        }
        return true;
    }
}

var minSwapsCouples = function(row) {
    const couple = (n) => ((n % 2) == 1)? n-1 : n+1;
    const dsu = new DSU(row.length/2);
    const hash = new Map();
    let res = 0;

    for (let i = 0; i <row.length-1; i++) {
        let index = Math.floor(i/2);
        let other = couple(row[i]);
        if (hash.has(other)) {
            if (dsu.union(index, hash.get(other))) res++;
        } else {
            hash.set(row[i], index);
        }
    }

    return res;
};

console.log(minSwapsCouples([0,2,1,3]));