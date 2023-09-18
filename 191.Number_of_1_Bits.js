/**
191. Number of 1 Bits
 */
var hammingWeight = function(n) {
    let ans = 0;
    for (let count = 1; count <= 32; count++) {
        if (n & 1) ans++;
        n = n >> 1;
    }
    return ans;
};
