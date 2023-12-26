/**
526. Beautiful Arrangement
思路：位掩码
state用于表示当前值的使用状态，第几个数已经被使用则state的第几位为1
state既是表示哪些数已经用过也表示剩下多少数可以选即目前是选择第几位
我们用 cache 记录不同的state对应的值来减少重复运算
 */
var countArrangement = function(n) {
    let cache = new Map();
    const dfs = function(i, state) {
        if (i == n+1) return 1;
        if (cache.has(state)) return cache.get(state);
        let mask = 1;
        let total = 0;
        for (let candid = 1; candid <= n; candid++) {
            if (mask & state) {
                mask <<= 1;
                continue;
            }
            if ((candid % i == 0) || (i % candid == 0)) {
                total += dfs(i+1, mask | state);
            }
            mask <<= 1;
        }
        return total;
    }
    return dfs(1, 0);
};
console.log(countArrangement(2));