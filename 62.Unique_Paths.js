/**
62. Unique Paths
题目应该是要我用递归做，但这道题用组合做太简单了
用递归做也挺简单的。
这道题还可以用dp做，见 63.  Unique Paths II
*/

function factorial(n) {
    if (n == 0) return 1;
    else return n*factorial(n-1);
}

var uniquePaths = function(m, n) {
    m--;
    n--;
    let ans = (factorial(m+n)/factorial(m))/factorial(n);
    return ans;
};

console.log(uniquePaths(3,7));