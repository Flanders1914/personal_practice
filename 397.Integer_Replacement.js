/**
397. Integer Replacement
思路：利用hash表优化的DFS
 */
var integerReplacement = function(n) {
    let memo = new Map();
    memo.set(1, 0);
    let dfs = function(n) {
        if (memo.has(n)) return memo.get(n);
        else {
            let res = 0;
            if (n % 2 == 0) {
                res= dfs(n/2) +1;
                memo.set(n, res);
                return res;
            } else {
                res = Math.min(dfs((n+1)/2), dfs((n-1)/2));
                res += 2;
                memo.set(n, res);
                return res;
            }
        }
    };
    return dfs(n);
};
console.log(integerReplacement(7));