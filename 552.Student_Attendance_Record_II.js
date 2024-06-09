/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    let dp1 = new Array(n+1);  // has A, end with P
    let dp2 = new Array(n+1); // has A, end with L
    let dp3 = new Array(n+1); // has A, end with LL
    let dp4 = new Array(n+1); // no A, end with P
    let dp5 = new Array(n+1); // no A, end with L
    let dp6 = new Array(n+1); // no A ,end with LL
    let dp7 = new Array(n+1); // has A, end with A

    dp1[1] = dp2[1] = dp3[1] = dp6[1] = 0;
    dp4[1] = dp5[1] = dp7[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp1[i] = (dp1[i-1] + dp2[i-1] + dp3[i-1] + dp7[i-1]) % 1000000007;
        dp2[i] = (dp1[i-1] + dp7[i-1]) % 1000000007;
        dp3[i] = (dp2[i-1])  % 1000000007;
        dp4[i] = (dp4[i-1] + dp5[i-1] + dp6[i-1]) % 1000000007;
        dp5[i] = (dp4[i-1]) % 1000000007;
        dp6[i] = (dp5[i-1]) % 1000000007;
        dp7[i] = (dp4[i-1] + dp5[i-1] + dp6[i-1]) % 1000000007;
    }

    return (dp1[n] + dp2[n] + dp3[n] + dp4[n] + dp5[n] + dp6[n] + dp7[n]) % 1000000007;
};