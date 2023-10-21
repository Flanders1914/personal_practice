/**
338. Counting Bits
思路：对于n,n的二进制表达中i的数量为 n >> 1的二进制表达中1的数量加上 n&1
 */
//var countBits = function(n) {
//    let ans = [0,1];
//    for (let power = 1; power <= Math.ceil(Math.log2(n)); power++) {
//        let next = [];
//        for (let n of ans) {
//            next.push(n+1);
//        }
//        ans.push(...next);
//    }
//    return ans.slice(0, n+1);
//};
var countBits = function(n) {
    let dp = new Array(n+1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i&1);
    }
    return dp;
}
console.log(countBits(5));