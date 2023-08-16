/**
96. Unique Binary Search Trees
思路：与95.95. Unique Binary Search Trees II 相同
速度较慢，用dp做会好一点
*/
var numTrees = function(n) {
    const cache = new Map();

    const search_BSTs = function(m, n) {
        if (m > n) return 1;
        if (cache.has(`${m}-${n}`)) return cache.get(`${m}-${n}`);

        let num = 0;
        for (let root = m; root <= n; root++) {
            let left = search_BSTs(m,root-1);
            let right = search_BSTs(root+1, n);
            num += left * right;
        }

        cache.set(`${m}-${n}`, num);
        return num;
    }

    return search_BSTs(1, n);
};

console.log(numTrees(3));